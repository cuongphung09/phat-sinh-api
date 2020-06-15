'use strict';

module.exports = function(app) {
  app.dataSources.postgresDs.automigrate('Book', function(err) {
    if (err) throw err;

    app.models.Book.create([{
      title: 'Node',
      author: 'Ryan Dahl',
    }, {
      title: 'Swift',
      author: 'Apple',
    }], function(err, book) {
      if (err) throw err;

      console.log('Models created: \n', book);
    });
  });
};
