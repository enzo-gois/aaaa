const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  birthDate: {
    type: String,
    require: true,
  },
  registration: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  course: {
    type: [String],
    require: true,
  }
})

const Student = mongoose.model("Student", studentSchema);
module.exports = {
  Student, studentSchema
}