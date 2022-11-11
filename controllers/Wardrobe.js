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
 
// for a specific Costume. 
exports.Wardrobe_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Wardrobe.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Wardrobe create on POST. 
exports.Wardrobe_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Wardrobe(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    //{"Wardrobe_type":"Glass", "Wardrobe_Color":"white", "Wardrobe_Size":100} 
    document.Wardrobe_type = req.body.Wardrobe_type; 
    document.Wardrobe_Color = req.body.Wardrobe_Color; 
    document.Wardrobe_Size = req.body.Wardrobe_Size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
exports.Wardrobe_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Wardrobe.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Wardrobe_type)  
               toUpdate.Wardrobe_type = req.body.Wardrobe_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.Wardrobe_view_all_Page = async function(req, res) { 
    try{ 
        theWardrobe = await Wardrobe.find(); 
        res.render('Wardrobe', { title: 'Wardrobe Search Results', results: theWardrobe }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};