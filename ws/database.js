const mongoose = require('mongoose');
const URI = process.env.DATABASE_URL;

mongoose
.connect(URI)
.then(() => console.log('DB is Up!'))
.catch((err) => console.log(err)); // Adicione 'err' ao parâmetro para ver o erro no console





//const mongoose = require('mongoose');
//const API_KEY = process.env.DATABASE_URL;
//const URI = API_KEY;

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

//mongoose
//.connect(URI)
//.then(() => console.log('DB is Up!'))
//.catch(() => console.log(err));