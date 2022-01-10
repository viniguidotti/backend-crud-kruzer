const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//mongoose.connect('mongodb+srv://vini:vini2308@crud-kruzer.wgkvs.mongodb.net/crud?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://vini:vini2308@vinim.695dm.mongodb.net/crudkruzer?retryWrites=true&w=majority')
 mongoose.connect('mongodb://localhost/crudkruzer');
mongoose.Promise = global.Promise;

module.exports = mongoose;
