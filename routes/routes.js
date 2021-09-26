const express = require("express");
const router = express.Router();
const purchases = require("../controller/purchases")

router 
    .get("/compras", purchases.GETpurchases)
    .get("/compras/:id", purchases.GETpurchase) 
    .post("/compras", purchases.POSTpurchases)
    .put("/compras/:id", purchases.PUTpurchase)
    .delete("/compras/:id", purchases.DELETEpurchase)
    
module.exports = router;
