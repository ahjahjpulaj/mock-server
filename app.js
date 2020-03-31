const express = require("express");
const data = require("./routes/data");

const app = express();

// Add headers
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

data(app);

app.listen(process.env.PORT || 4000, function() {
  console.log("Example app listening on port 4000!");
});
