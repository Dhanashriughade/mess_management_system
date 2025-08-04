

// const express = require("express");
// const router = express.Router();
// const User = require("../models/userModel");
// const bcrypt = require("bcryptjs");


// router.get('/login', (req, res) => {
//     if (req.session.admin) {
//         return res.redirect('/admin/dashboard'); // Redirect if already logged in
//     }
//     res.render('login');
// });
// // User Registration Route
// router.post("/register", async (req, res) => {
//     const { name, email, phone, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.render("register", { error: "❌ User already exists!" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ name, email, phone, password: hashedPassword });

//         await newUser.save();
//         res.redirect("/auth/login"); // Registration ke baad login page pe bhejo
//     } catch (err) {
//         res.render("register", { error: "❌ Error registering user!" });
//     }
// });

// // User Login Route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.render("login", { error: "❌ User not found!" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.render("login", { error: "❌ Incorrect Password!" });
//         }

//         req.session.userId = user._id;
//         res.redirect("/home"); // Success hone par home page
//     } catch (err) {
//         res.render("login", { error: "❌ Login error! Try again." });
//     }
// });

// module.exports = router;
