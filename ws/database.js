const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:9a6g9e3b5g8C@clusterdev.ehtb2eq.mongodb.net/salao-na-mao?retryWrites=true&w=majority&appName=ClusterDev';

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

mongoose
.connect(URI)
.then(() => console.log('DB is Up!'))
.catch(() => console.log(err));