const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
      'mongodb+srv://admin:admin@cluster0.q79uc.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }
 
    )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error bch tetarcheg");
    });
};
module.exports = db_connection;