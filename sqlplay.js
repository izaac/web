var Sequelize = require('sequelize');
var sequelize = new Sequelize('test1', 'postgres', '2c3a4n56A', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'database.sqlite',
  logging: false
});


var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: false}).then(function () {
  // Table created
  return User.findOrCreate( {where: { firstName: 'John', lastName: 'Snow'} })
  .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }));
  });
});

User = sequelize.model('user');

User.findOne().then(function (user) {
    console.log(user.firstName + " " + user.lastName);
});
