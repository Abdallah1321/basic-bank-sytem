import transactionSchema from "../models/Transaction.js";
import userSchema from "../models/User.js";

export const createTransaction = async (req, res) => {
  const { sender, receiver, amount } = req.body;

  try {
    // Find the sender and receiver by their IDs
    const fromCustomer = await userSchema.findById(sender);
    const toCustomer = await userSchema.findById(receiver);

    if (!fromCustomer || !toCustomer) {
      return res.status(404).json({ error: "Sender or receiver not found" });
    }

    // Calculate new balances
    const newFromBalance = Number(fromCustomer.balance) - Number(amount);
    const newToBalance = Number(toCustomer.balance) + Number(amount);

    // Update sender's and receiver's balances
    await userSchema.findByIdAndUpdate(sender, { balance: newFromBalance });
    await userSchema.findByIdAndUpdate(receiver, { balance: newToBalance });

    // Create a transaction record
    const transaction = new transactionSchema({
      sender: sender,
      receiver: receiver,
      amount,
    });

    await transaction.save();

    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionSchema.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
