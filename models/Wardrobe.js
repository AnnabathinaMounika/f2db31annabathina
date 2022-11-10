const mongoose = require("mongoose") 
const WardrobeSchema = mongoose.Schema({ 
    Wardrobe_type: String, 
    Wardrobe_Color: String, 
    Wardrobe_Size: Number 
}) 
 
module.exports = mongoose.model("Wardrobe", 
WardrobeSchema) 