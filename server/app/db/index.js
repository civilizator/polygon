
const data = require('./../password');

module.exports = {
  url: `mongodb+srv://${data.name}:${data.password}@stan-nmdk4.mongodb.net/admin?retryWrites=true&w=majority`
  // url: `mongodb+srv://stan:${data.password}@stan-nmdk4.mongodb.net/admin?retryWrites=true&w=majority`
};
