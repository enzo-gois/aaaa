const main = require("../database/conn");
const { Student: StudentModel, Student } = require("../models/Student");

const studentController = {
  create: async(req,res) => {
    try {
      const student = {
        name: req.body.name,
        address: req.body.address,
        birthDate: req.body.birthDate,
        registration: req.body.registration,
        phone: req.body.phone,
        email: req.body.email,
        course: req.body.course
      }
      const response = await StudentModel.create(student);
      res.status(201).json({response, msg: "Aluno criado com sucesso!"})
    } catch (error) {
      console.log(error)
    }
  },

  readAll: async(req, res)=>{
    let results = await StudentModel.find({});
    res.send(results).status(200);
  },

  delete: async(req, res)=>{
    try {
      const id = req.params.id;
      let results = await StudentModel.deleteOne({_id: id});   
      res.send(results).status(200); 
    } catch (error) {
      console.log(error);
    }
  },

  readOne: async(req, res)=>{
    try {
      const id = req.params.id;
      let results = await StudentModel.findOne({_id: id});   
      res.send(results).status(200); 
    } catch (error) {
      console.log(error);
    }
  },

  update: async(req, res)=>{
    try {
      const id = req.params.id;
      const student = {
        name: req.body.name,
        address: req.body.address,
        birthDate: req.body.birthDate,
        registration: req.body.registration,
        phone: req.body.phone,
        email: req.body.email,
        course: req.body.course
      };
      let results = await StudentModel.updateOne({_id: id},{$set: student});   
      res.send(results).status(200); 
    } catch (error) {
      console.log(error);
    }
  },
}

module.exports = studentController;