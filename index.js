const express = require("express");
const app = express();

app.get("/api/user", (req, res) => res.send("Express on Vercel"));
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resuorce Not Found" })
})
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;