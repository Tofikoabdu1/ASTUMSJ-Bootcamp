const express = require("express");
const { port, appName } = require("./config/env");
const cors = require("cors");
const app = express();
const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

app.listen(port, () => console.log(`${appName} RUNNING ON PORT ${port}`));
