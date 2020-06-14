const express = require("express"),
    app = express();
const routes = require("./routes/index");

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

app.get("/", routes.index);
app.post("/makeCoffee", routes.makeCoffee);

app.listen(3000, function(){
    console.log("Server at http://localhost:3000");
});