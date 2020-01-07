const mongoose = require('mongoose')

const jschema = new mongoose.Schema({
      image:        String,
      title:        String,
      subTitle:     String,
      author:       String,
      description:  String,
      published:   {
           type:    Date,
           default: Date.now
                   }
})

module.exports = mongoose.model('Journal',jschema)
