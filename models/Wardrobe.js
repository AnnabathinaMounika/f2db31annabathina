const mongoose = require("mongoose") 
const WardrobeSchema = mongoose.Schema({ 
    Wardrobe_type: {type:String},     
    Wardrobe_Color: {type:String,minLength: 5},
    Wardrobe_Size: {type:Number, min:10, max:200}
}) 
 
module.exports = mongoose.model("Wardrobe", WardrobeSchema)