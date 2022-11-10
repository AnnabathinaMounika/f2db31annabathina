var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Wardrobe_controller = require('../controllers/Wardrobe'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/Wadrobe', api_controller.api); 
 
/// Wardrobe ROUTES /// 
 
// POST request for creating a Wardrobe.  
router.post('/Wardrobe', Wardrobe_controller.Wardrobe_create_post); 
 
// DELETE request to delete Wardrobe. 
router.delete('/Wardrobe/:id', Wardrobe_controller.Wardrobe_delete); 
 
// PUT request to update Wardrobe. 
router.put('/Wardrobe/:id', Wardrobe_controller.Wardrobe_update_put); 
 
// GET request for one Wardrobe. 
router.get('/Wardrobe/:id', Wardrobe_controller.Wardrobe_detail); 
 
// GET request for list of all Wardrobe items. 
router.get('/Wardrobe', Wardrobe_controller.Wardrobe_list); 
 
module.exports = router; 