const express = require("express");

const app = express();

// Body Parser
app.use(express.json());

app.get("/", (req, res) => res.send("Site is up"));

// routes
app.use("/api/clinics", require("./routes/clinics"));
app.use("/api/consultations", require("./routes/consultations"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
