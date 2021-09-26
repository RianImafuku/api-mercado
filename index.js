const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("./config/cors");
const router = require("./routes/routes")

app.use(express.json());
app.use(cors);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use("/", router);


app.listen(3000, () => {
    console.log({ success:"server online"});
})

