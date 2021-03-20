const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet');
const errorMiddlewares = require('./middleware/errorHandlers')
const path = require('path')

require('dotenv').config();

const app = express();

app.use(morgan('common'));
app.use(cors());
app.use(helmet());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "client/build")))
}

//database connection

//routes

app.get('/', (req, res) => {
    res.json({
        message: 'You have made a succsesfull api GET request! Congratulations! 🥳🥳🥳'
    });
});

app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})