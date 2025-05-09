const mongoose = require('mongoose');


const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log('Connected to the database...'))
        .catch((err) => {
            console.log(err);
            process.exit(1); // Exit process with failure
        });

}

module.exports = connectDB;