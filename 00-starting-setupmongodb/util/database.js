const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://sdgsnehal:spiceqt60@cluster0.zutjjrv.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
      console.log("Connected")
      callback(client)
    })
    .catch(err =>{
      console.log(err)
    
    });
};
module.exports = mongoConnect;

