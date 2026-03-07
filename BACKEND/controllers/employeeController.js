const Employee = require("../models/Employee");

exports.createEmployee = async(req,res)=>{
  const emp = await Employee.create(req.body);
  res.json(emp);
};

exports.getEmployees = async(req,res)=>{

  const search = req.query.search || "";

  const employees = await Employee.find({
    $or:[
      {name:{$regex:search,$options:"i"}},
      {department:{$regex:search,$options:"i"}}
    ]
  });

  res.json(employees);
};

exports.getEmployee = async(req,res)=>{
  const emp = await Employee.findById(req.params.id);
  res.json(emp);
};

exports.updateEmployee = async(req,res)=>{
  const emp = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(emp);
};

exports.deleteEmployee = async(req,res)=>{
  await Employee.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};