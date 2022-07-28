const fs=require('fs');
// const tours_data=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));
const Tour=require('./../models/tourModel')

exports.getTours=async (req,res)=>{
    try{
   const allTours=await Tour.find(req.query) // returns all documnents from Tour collection
   console.log(req.query)
   res.status(200).json({
    status:"status",
    length:allTours.length,
    data:
        allTours
    
   })
}
catch(err){
    res.status(400).json({
        message:"error",
        status:"fail"
    })
}
}
//Creating document and saving in db.
exports.postTour=async (req,res)=>{
    try{
        const newTour=await Tour.create(req.body);
        
        res.status(200).json({
            status:'success',
            length:newTour.length,
            data:{
                tour:newTour
            }
        });
        
    } catch(err){
        res.status(400).json({
            message:err
        })
    }
}

exports.getTourById=async (req,res)=>{
    try{
      const tour =  await Tour.findById(req.params.id);
      res.json({
        data:
            tour
      })
    }
    catch(err){
        status:"error"
    }
}

exports.updateTourById=async (req,res)=>{
    try{
    console.log(req.body)
    console.log(req.params.id)
    const tour= await Tour.findByIdAndUpdate(req.params.id,req,body,{
        new:true,
        runValidators:true
    })
    console.log(tour)
    res.json({
        status:'success',
        data:{tour}
    })
    }
    catch(err){
        res.json({
            status:"fail",
            message:{err}
        })
    }
}

exports.deleteTourById=async(req,res)=>{
    try{
        const tour=await Tour.findByIdAndRemove(req.params.id);
        res.json({
            status:"success",
            data:{
                tour
            }
        })
    }
    catch(err){
        res.json({
            status:"fail",
            message:err
        })
    }
}

