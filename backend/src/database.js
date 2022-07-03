require('./database')
const moongose = require("mongoose")


moongose.
    connect('mongodb://localhost/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log("Db is connected"))
    .catch((err) => console.error(err));