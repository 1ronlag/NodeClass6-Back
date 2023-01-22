const express = require("express");
const app = express();
const cors = require("cors");
const CsbInspector = require("csb-inspector");
CsbInspector();
const morganBody = require("morgan-body");
morganBody(app);

app.use(cors());
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server encendido en puerto ${port}`);
});


module.exports = app;
