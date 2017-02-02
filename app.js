const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const home = require('./routes/routes');

const app = Express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'))

app.use('/', routes);

const PORT = 4545;
app.listen(PORT, function(){console.log(`Server listening on http://localhost: ${PORT}`)})
