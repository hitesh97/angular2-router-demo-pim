
module.exports = function(app) {
  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: './web' });
  });
  app.get('/api/v1/tasks', function(req, res) {
    res.send(200, [
      { id: 1, description: 'Do the dishes', dueDate: new Date(), complete: false },
      { id: 2, description: 'Do the floors', dueDate: new Date(), complete: false },
      { id: 3, description: 'Do the dusting', dueDate: new Date(), complete: false },
      { id: 4, description: 'Do the washing', dueDate: new Date(), complete: false },
      { id: 5, description: 'Do the painting', dueDate: new Date(), complete: false },
      { id: 6, description: 'Do the shopping', dueDate: new Date(), complete: false },
    ]);
  });
}
