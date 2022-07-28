const mongoose=require('mongoose')

const tourSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        required:[true,'A Tour must have a name'],
        unique:true
    },
    duration:{
     type:Number,
     required:[true,'A Tour must have a duration']
        
    },
    maxGroupSize:{
        type:Number,
        required:[true,'A Tour must have a maxGroupSize']
        
    },
    difficulty:{
        type:String
    },
    ratingsAverage:{
        type:Number,
        default:4.5,
        required:[true,'A Tour must have a ratingsAverage']
        
    },
    ratingsQuantity:{
        type:Number,
        required:[true,'A Tour must have a ratingsQuantity']
    },
   
    price:{
        type:Number,
        required:[true,'A Tour must have a price']
    },
    priceDiscount:{
        type:Number,
        validator:{
        validate:function(val){
            return val < this.price
        }
        // message:
    }
    },
    description:{
        type:String,
        trim:true,
        required:[true,'A Tour must have a description']
    },
    summary:{
      type:String,
      trim:true,
      required:[true,'A Tour Must have a summary']  
    },
    imageCover:{
        type:String, // reference will be stored only
        required:[true,'A tour must have a cover image']
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})

const Tour=mongoose.model('Tour',tourSchema);

module.exports=Tour