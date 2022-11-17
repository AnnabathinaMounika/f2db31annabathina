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
router.get('/detail', Wardrobe_controlers.Wardrobe_view_one_Page); 
router.get('/create', Wardrobe_controlers.Wardrobe_create_Page);
router.get('/update', Wardrobe_controlers.Wardrobe_update_Page);  
router.get('/:id', Wardrobe_controlers.Wardrobe_detail);
router.put('/:id', Wardrobe_controlers.Wardrobe_update_put);

module.exports = router;
