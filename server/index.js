import express from 'express';
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
// const loginController  = require('./loginController')
const Routes = require('./indexRoute')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(logger('dev'))

const port = process.env.PORT || 6000

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/icp',  { useNewUrlParser: true })
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))

app.get('/backend', (req, res) => {
    res.status(200).send({
        message: 'sever is connected'
    })
})

app.post('/newPost', (req, res) => {
    res.status(201).send(`Got this for you, ${req.body.newPost}`)
})


app.use('/api/', Routes)
app.listen(port, () => {
    console.log(`connected, ${port}`)
})