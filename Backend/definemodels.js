// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);

// models/Expense.js
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    comments: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
