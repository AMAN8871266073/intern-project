const internModel = require('../models/internModel')
const collegeModel = require('../models/collegeModel')
const registerIntern = async function (req, res) {
    try {
        let data = req.body
        let collegeName = data.collegeName
        let college = await collegeModel.findOne({ name: collegeName })
        console.log(college)
        let collegeId = college._id
        let intern = {
            'name': data.name,
            'mobile': data.mobile,
            'email': data.email,
            'collegeId': collegeId
        }
        let saved = await internModel.create(intern)
        res.status(201).send({ 'status': true, 'data': saved })
    }
    catch (err) {
        res.status(500).send({ "status": false, 'message': err })
    }
}
const internList=async function(req,res){
    let college=req.query.collegeName
    let college_data=await collegeModel.findOne({name:college})
    let id=college_data._id
    let interns=await internModel.find({collegeId:id}).select({name:1,mobile:1,email:1})
    let collegeDetails={
        name:college_data.name,
        fullName:college_data.fullName,
        logoLink:college_data.logoLink,
        interests:interns
     }
   res.send({'data':collegeDetails})
}
module.exports.registerIntern = registerIntern
module.exports.internList = internList