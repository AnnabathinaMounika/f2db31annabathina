var Wardrobe = require('../models/Wardrobe'); 
 
// List of all Wardrobe
exports.Wardrobe_list = async function(req, res) { 
    try{ 
        theWardrobe = await Wardrobe.find(); 
        res.send(theWardrobe); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// for a specific Wardrobe. 
exports.Wardrobe_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Wardrobe detail: ' + req.params.id); 
}; 
 
// Handle Wardrobe create on POST. 
exports.Wardrobe_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Wardrobe create POST'); 
}; 
 
// Handle Wardrobe delete form on DELETE. 
exports.Wardrobe_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Wardrobe delete DELETE ' + req.params.id); 
}; 
 
// Handle Wardrobe update form on PUT. 
exports.Wardrobe_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Wardrobe update PUT' + req.params.id); 
}; 