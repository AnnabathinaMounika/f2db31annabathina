var express = require('express');
const Wardrobe_controlers= require('../controllers/Wardrobe'); 
var router = express.Router();

/*class Wardrobe {
  constructor(Wardrobe_type, Wardrobe_Color, Wardrobe_Size)
  {
    this.Wardrobe_type = Wardrobe_type;
    this.Wardrobe_Color = Wardrobe_Color;
    this.Wardrobe_Size = Wardrobe_Size;
  }
}*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  let W1 = new Wardrobe("Glass", "white", 100);
  let W2 = new Wardrobe("Walk-in", "black", 150);
  let W3 = new Wardrobe("Wooden", "brown", 200);

  res.render('Wardrobe', { title: 'Search Results Wardrobe',Wardrobe : [W1,W2,W3]});
});*/
router.get('/', Wardrobe_controlers.Wardrobe_view_all_Page ); 
module.exports = router;
