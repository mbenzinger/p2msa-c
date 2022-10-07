// source https://levelup.gitconnected.com/how-to-start-every-full-stack-project-7c92e07f8693
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());
app.get("/api", async (req, res) => {
res.send({ data: "received" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});