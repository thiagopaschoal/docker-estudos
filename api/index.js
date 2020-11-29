const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(process.env.API_MSG);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
