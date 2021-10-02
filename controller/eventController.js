const EVENT = require('../model/modelEvents');
module.exports ={
addEvent: async (req,res) =>{

    const title = req.body.title;
    const date = req.body.date;
    const place = req.body.place;

    try{
        const event =  new EVENT({
            title,date,place
        })
        await event.save();
        res.json(event);



    }
    
    catch(err){console.log(err)}
    
},
deleteEvent:async (req, res)=>{
    try{
        const event = await EVENT.findByIdAndDelete(req.params.id)
          res.json(event)
    }   
    
    catch(err){console.log(err)}

},
getOne:async (req, res)=>{
    try{
        const event = await EVENT.findById(req.params.id);
        res.json(event);
    }
    catch(err){
        console.log(err)
    }
},

updateEvent:async (req, res)=>{
    try{
        const event = await EVENT.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(event);
    } 
      catch(err){
        console.log(err)
    }
}


}
