import mongoose from 'mongoose'

mongoose.connect('mongodb://mongo/sgsst', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(error => console.log(error))
