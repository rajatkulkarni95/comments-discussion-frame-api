const express = require("express");
const app = express();

const v1Routes = require("./routes/api/v1");

app.use("/api/v1", v1Routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
