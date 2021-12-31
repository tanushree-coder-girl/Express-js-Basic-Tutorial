const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

const { engine } = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'static')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Create separate routes inside routes/blog.js 
app.use('/',require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`);
})