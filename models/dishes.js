const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    dishname: {
      type: String,
      required: true,
    },

    serving: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Dishes = mongoose.model("Dish", dishSchema);

module.exports = Dishes;
