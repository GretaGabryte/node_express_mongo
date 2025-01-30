const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "shipped", "delivered"],
  },
});

module.exports = mongoose.model("Order", OrderSchema);
