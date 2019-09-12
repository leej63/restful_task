const controller = require('./controller')

module.exports = function(app){
    app.get('/tasks', controller.all_task)                      // Retrieve all tasks
    app.post('/tasks', controller.create_task)                  // Create a task
    app.get('/tasks/:id', controller.retrieve_task)             // Retrieve a task by ID
    app.put('/tasks/:id', controller.update_task)               // Update task by ID
    app.delete('/tasks/:id', controller.delete_task)            // Delete task by ID
}