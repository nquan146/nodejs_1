const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars');
const app = express()
const port = 3520

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))

app.listen(port, () => {
  console.log(`Run app nodejs on port ${port}`)
})