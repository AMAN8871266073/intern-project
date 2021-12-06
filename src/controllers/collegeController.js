const collegeModel=require('../models/collegeModel')
const registerCollege=async function(req,res){
    try{
    let data=req.body
    let college=await collegeModel.create(data)
    res.status(200).send({'registered college:':college})
    } 
    catch(err){
        res.status(500).send({'msg:':err})
    } 
}

module.exports.registerCollege=registerCollege