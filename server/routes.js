var bodyParser = require('body-parser');
module.exports = function(app) {
  app.use(bodyParser.json());
  var tasks = [
        {id: 1, description: 'Do the dishes', priority: 3, dueDate: new Date(), complete: false},
        {id: 2, description: 'Do the floors', priority: 3, dueDate: new Date(), complete: true},
        {id: 3, description: 'Do the dusting', priority: 1, dueDate: new Date(), complete: false},
        {id: 4, description: 'Do the washing', priority: 3, dueDate: new Date(), complete: false},
        {id: 5, description: 'Do the painting', priority: 5, dueDate: new Date(), complete: false},
        {id: 6, description: 'Do the shopping', priority: 3, dueDate: new Date(), complete: false},
      ], lastTask = 6;

  // SO pathetic, but it's a demo!
  function nextTaskMutate() {
    lastTask += 1;
    return lastTask;
  }

  app.get('/api/v1/tasks', function(req, res) {
      res.status(200).send(tasks);
  });
  app.put('/api/v1/tasks', function(req, res) {
    console.log('put with data', req.body);
    var task = req.body;
    task.id = nextTaskMutate();
    task.complete = false;
    tasks.push(task);
    res.status(200).send('OK');
  });
  app.post('/api/v1/tasks', function(req, res) {
    var task = req.body;
    if (task.complete !== undefined) {
      tasks.find(function(t) { return t.id === task.id}).complete = task.complete;
      console.log(tasks);
      res.status(201).send('OK');
    } else {
      console.log('task not found');
      res.status(404).send('NOT FOUND');
    }

  })
  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: './web' });
  });
};
