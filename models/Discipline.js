const mongoose = require("mongoose");
const{Schema} = mongoose;

const disciplineSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    workload:{
        type: String,
        require: true,
    }
}, 
{timestamps: true}
);

const Discipline = mongoose.model("Course", disciplineSchema);
module.exports = {
    Discipline,
    disciplineSchema,
};