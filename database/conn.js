const mongoose = require("mongoose");

async function main(){
  try {
    mongoose.set("strictQuery",true);

    await mongoose.connect('mongodb+srv://root:jWLC50jqT99NXzQ8@cluster0.fxallcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    console.log("conectado ao mongodb");
  } catch (error) {

    console.log(`Error: ${error}`);
  }
}
module.exports = main;