const express = require('express')
const app = express()
const port = 3000

const path = require('path')

// create own middleware 
const myMiddleWare = (req, res, next) => {
    console.log(req); next();
}
//use own middleware 
app.use(myMiddleWare);

// Using express middlewares 
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Homepage  !')
})

// Serve html file 
app.get('/htmlPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlPage.html'));
    //also set status 
    //res.status(500);
})


// Send Json
app.get('/json', (req, res) => {
    res.json(
        {
            name : 'maria',
            age : 20,
            profession : 'developer'
        }
    )
})

// serve html file inside public folder 
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'))
})

// routing Query String / parameters 
app.get('/user/:id', (req, res) => {
    res.send('User Id is' + " " + req.params.id);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})