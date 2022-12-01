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
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/', Wardrobe_controlers.Wardrobe_view_all_Page ); 
router.get('/detail', Wardrobe_controlers.Wardrobe_view_one_Page); 
router.get('/create', secured,Wardrobe_controlers.Wardrobe_create_Page);
router.get('/update', secured,Wardrobe_controlers.Wardrobe_update_Page);   
router.get('/delete', secured,Wardrobe_controlers.Wardrobe_delete_Page);
router.get('/:id', Wardrobe_controlers.Wardrobe_detail);
router.put('/:id', Wardrobe_controlers.Wardrobe_update_put);

module.exports = router;
