const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/adminBudgetController');

// View budget page
router.get('/budget', budgetController.viewBudgetPage);

// Submit budget data
router.post('/budget', budgetController.submitBudgetData);

// router.get("/budget/history", budgetController.getAllBudgets);
router.get("/budget", budgetController.getBudgetPage);

router.get("/budget/history", budgetController.getAllBudgets);
router.get('/budget',budgetController.saveBudget);
module.exports = router;
