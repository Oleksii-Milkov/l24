//const coffeeMachine = require("./../public/src/coffeeMachine");

module.exports.index = function (req, res) {
    res.render("index", { title: "Кофеварка" });
};

module.exports.makeCoffee = function (req, res) {

};
