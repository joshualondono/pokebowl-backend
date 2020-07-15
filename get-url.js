// Your code here.
// Note that you do NOT need the data for this function!

const pokemon = require('./pokemon.js');

const getUrl = function(row){
    return row[1]
}


// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl;
