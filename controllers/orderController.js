const Order = require("../models/Order.js");

const getOrders = async (req, res) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
};

const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("userId");
  res.json(order);
};

const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
};

const updateOrder = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedOrder);
};

const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};

module.exports = { getOrders, getOrder, createOrder, updateOrder, deleteOrder };
