const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

const Dishes = require("../models/dishes");

dishRouter
  .route("/")
  .get((req, res, next) => {
    Dishes.find(req.query)
      .then(
        (dishes) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dishes);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    var dp = req.files.image;
    var ingredients = JSON.parse(req.body.ingredients);
    var steps = JSON.parse(req.body.steps);
    dp.mv("public/images/" + dp.name, (err) => {
      if (err) {
        res.json({ status: "dish is not uploaded" });
      } else {
        var newDishData = {
          dishname: req.body.dishname,
          serving: req.body.serving,
          time: req.body.time,
          image: "images/" + dp.name,
          ingredients: ingredients,
          steps: steps,
          author: req.body.author,
        };

        const newDish = new Dishes(newDishData);
        newDish
          .save()
          .then(
            () => {
              res.statusCode = 200;
              res.json("Dish added");
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      }
    });
  });

dishRouter.route("/:dishId").get((req, res, next) => {
  Dishes.findById(req.params.dishId)
    .then(
      (dish) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dish);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = dishRouter;
