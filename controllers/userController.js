// get request -> 
/*
localhost:3000/api/v1/
localhost:3000/api/v1/:id
*/
getUser=(req,res)=>{
    res.send({
        message:"getUser get req"
    })
}

postUser=(req,res)=>{
    res.send({
        message:"postUser post req"
    })
}

getUserById=(req,res)=>{
    res.send({
        message:"getUserById get req"
    })
}

patchUserById=(req,res)=>{
    res.send({
        message:"getUserById patch req"
    })
}

deleteUserById=(req,res)=>{
    res.send({
        message:"getUserById del req"
    })
}

module.exports={getUser,postUser,getUserById,patchUserById,deleteUserById};