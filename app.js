const express=require('express');
const app=express();
const tourRoute=require('./routes/tourRoute');
const userRoute=require('./routes/userRoute');
app.use(express.json());

// ROUTES

app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);

module.exports = app;