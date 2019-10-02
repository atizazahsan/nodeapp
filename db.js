const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://atizaz:pakistan905@cluster0-rxrsm.mongodb.net/app?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db()
  
})
const app = require('./app')
  app.listen(3000)