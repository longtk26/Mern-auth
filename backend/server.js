import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("API running...");
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})