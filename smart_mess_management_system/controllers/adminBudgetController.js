const Budget = require("../models/budget");

// Render the Budget Page with latest budget
exports.viewBudgetPage = async (req, res) => {
  try {
    const latestBudget = await Budget.findOne().sort({ createdAt: -1 }).lean();
    res.render("adminBudget", { budget: latestBudget || { items: [], totalCollection: 0 } });
  } catch (error) {
    res.status(500).send("Error loading budget page");
  }
};

// Save the submitted budget
exports.submitBudgetData = async (req, res) => {
  try {
    const { items, prices } = req.body;

    const formattedItems = items.map((name, index) => ({
      name,
      price: parseFloat(prices[index])
    }));

    const totalCollection = formattedItems.reduce((sum, item) => sum + item.price, 0);

    const newBudget = new Budget({
      totalCollection,
      items: formattedItems
    });

    await newBudget.save();
    res.redirect("/admin/budget");
  } catch (error) {
    res.status(500).send("❌ Failed to save budget data");
  }
};

// (Optional) View all historical budget entries
// exports.getAllBudgets = async (req, res) => {
//   try {
//     const budgets = await Budget.find({}).sort({ createdAt: -1 }).lean();
//     res.render("adminBudgetHistory", { budgets });
//   } catch (err) {
//     res.status(500).send("Error fetching budget history.");
//   }
// };
// exports.getBudgetPage = async (req, res) => {
//     try {
//       const previousBudgets = await Budget.find({}).sort({ createdAt: -1 }).lean();
//       res.render("adminBudgetHistory", { previousBudgets });
//     } catch (err) {
//       console.error("Error loading budget page:", err);
//       res.status(500).send("Internal Server Error");
//     }
//   };
exports.getBudgetPage = async (req, res) => {
  try {
    const budgets = await Budget.find().sort({ createdAt: -1 });
    const latestBudget = budgets.length > 0 ? budgets[0] : null;
    const totalCollection = 100000; // Example value
    const totalSpent = latestBudget ? latestBudget.total : 0;
    const leftAmount = totalCollection - totalSpent;

    res.render("adminBudget", {
      totalCollection,
      latestBudget,
      leftAmount,
      previousBudgets: budgets,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
// exports.saveBudget = async (req, res) => {
//   try {
//     const { items, prices } = req.body;
//     const parsedItems = Array.isArray(items) ? items : [items];
//     const parsedPrices = Array.isArray(prices) ? prices.map(Number) : [Number(prices)];
//     const total = parsedPrices.reduce((acc, val) => acc + val, 0);

//     const newBudget = new Budget({ items: parsedItems, prices: parsedPrices, total });
//     await newBudget.save();

//     res.redirect("/admin/budget");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal server error");
//   }
// };
exports.saveBudget = async (req, res) => {
  try {
    const { itemNames, itemPrices, totalCollection } = req.body;

    // Build items array from names and prices
    const items = itemNames.map((name, index) => ({
      name,
      price: Number(itemPrices[index]),
    }));

    // Store budget with correct totalCollection
    const budget = new Budget({
      items,
      totalCollection: Number(totalCollection),
    });

    await budget.save();
    res.redirect('/admin/budget');
  } catch (err) {
    console.error('Error saving budget:', err);
    res.status(500).send('Internal Server Error');
  }
};





// View all previous budgets
exports.getAllBudgets = async (req, res) => {
  try {
    const previousBudgets = await Budget.find().sort({ createdAt: -1 });
    res.render("adminBudgetHistory", { previousBudgets });
  } catch (err) {
    console.error("Error fetching budget history:", err);
    res.status(500).send("Internal Server Error");
  }
};
