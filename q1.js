const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<a href='q1_Staticform.html'>Question 1</a>");
});

app.post("/handle_form", (req, res) => {
  const { name, age } = req.body;
  res.send("Name : " + name + "<br>Age : " + age);
});

app.listen(3000, (req, res) => {
  console.log("Server is running on PORT 3000");
});
