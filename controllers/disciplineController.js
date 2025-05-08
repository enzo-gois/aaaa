const main = require("../database/conn");
const { Discipline: DisciplineModel, Discipline } = require("../models/Discipline");

const disciplineController = {
  create: async(req,res) => {
    try {
      const discipline = {
        name: req.body.name,
        workload: req.body.workload
      }
      const response = await DisciplineModel.create(discipline);
      res.status(201).json({response, msg: "Disciplina criada com sucesso!"})
    } catch (error) {
      console.log(error)
    }
  },

  readAll: async(req, res)=>{
    let results = await DisciplineModel.find({});
    res.send(results).status(200);
  },

  delete: async(req, res)=> {
    try {
      const id = req.params.id;
      let results = await DisciplineModel.deleteOne({_id: id});   
      res.send(results).status(200); 
    } catch (error) {
      console.log(error);
    }
  },

  readOne: async(req, res)=>{
    try {
      const id = req.params.id;
      let results = await DisciplineModel.findOne({_id: id});   
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
        workload: req.body.workload
      };
      let results = await DisciplineModel.updateOne({_id: id},{$set: student});   
      res.send(results).status(200); 
    } catch (error) {
      console.log(error);
    }
  },
}

module.exports = disciplineController;