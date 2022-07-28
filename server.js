const app=require('./app.js')
const mongoose=require('mongoose')
const port=3000;

mongoose.connect('mongodb+srv://sachin:sachin1234@cluster0.sqbcs.mongodb.net/natours',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(conn=>{
    console.log('db connected')
})

app.listen(port,()=>{
    console.log("app is running on port ",{port});
})