import e from "express";

const app = e();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>Home PAGE</p>");
});
