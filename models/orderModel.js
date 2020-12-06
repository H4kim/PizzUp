const mongoose = require('mongoose');
const Product = require('../models/productModel');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Order must belong to a user'],
  },
  date: {
    type: String,
    default: Date.now(),
    // enum: Date.now(),
  },
  status: {
    type: String,
    enum: ['new', 'processing', 'cancelled', 'delivered'],
    default: 'new',
    required: true,
  },
  phone: {
    type: String,
    required: [true, 'please provide your phone number'],
  },
  address: {
    type: String,
  },
  orderNum: {
    type: Number,
    required: [true, 'please provide the number of products ordred!'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'No Total price !'],
  },
  orderDetails: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, 'No product Id provided'],
      },
    },
  ],
});

orderSchema.pre(/^find/, function () {
  this.populate({ path: 'orderDetails.product', select: 'name price image' });
});

orderSchema.pre('save', async function () {
  //Reformat the date :
  this.date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  let productsIDs = [];
  for (i = 0; i < this.orderDetails.length; i++) {
    if (this.orderDetails[i].quantity > 1) {
      for (j = 0; j < this.orderDetails[i].quantity; j++) {
        productsIDs.push(this.orderDetails[i].product);
      }
    } else {
      productsIDs.push(this.orderDetails[i].product);
    }
  }

  const productsPromises = productsIDs.map((cur) => {
    return Product.findById(cur);
  });

  const products = await Promise.all(productsPromises);
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrice += +products[i].price;
  }

  this.totalPrice = totalPrice;
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
