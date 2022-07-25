const mongoose = require("mongoose");

var PromoSchema = new mongoose.Schema({
  
  codePromo: {
    type: String,
    required: true,
  },
  pourcentage: {
    type: String,
    required: true,
  },
  beginDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  produitSolde: [
    {
      type: String,
    }
  ]
});
module.exports = mongoose.model("Promotion", PromoSchema);
