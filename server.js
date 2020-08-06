const mongoose = require('mongoose');
const app = require('./app')
require('dotenv').config({ path : './config.env' });


mongoose.connect('mongodb://127.0.0.1:27017/restaurant', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(err => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})