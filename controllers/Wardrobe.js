var Wardrobe = require('../models/Wardrobe'); 

// List of all watchs 
exports.Wardrobe_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Wardrobe list'); 
}; 
 
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

// Handle Wardrobe update form on PUT. 
exports.Wardrobe_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Wardrobe.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Wardrobe_type)  
               toUpdate.Wardrobe_type = req.body.Wardrobe_type; 
        if(req.body.cost) toUpdate.Wardrobe_Cost = req.body.Wardrobe_Cost; 
        if(req.body.size) toUpdate.Wardrobe_Size = req.body.Wardrobe_Size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle Wardrobe delete on DELETE. 
exports.Wardrobe_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Wardrobe.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 // Handle a show one view with id specified by query 
 exports.Wardrobe_view_one_Page = async function(req, res) { 
    console.log("single view for id "  +req.query.id) 
    try{ 
        result = await Wardrobe.findById(req.query.id) 
        res.render('Wardrobedetail',  { title: 'Wardrobe Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        console.log("error")
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Wardrobe. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Wardrobe_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Wardrobecreate', { title: 'Wardrobe Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for updating a Wardrobe. 
// query provides the id 
exports.Wardrobe_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Wardrobe.findById(req.query.id) 
        res.render('Wardrobeupdate', { title: 'Wardrobe Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Wardrobe_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Wardrobe.findById(req.query.id) 
        res.render('Wardrobedelete', { title: 'Wardrobe Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
 