// VIEWS in DJANGO - this is where the logic goes
const Task = require('./models');

module.exports = {
    all_task: (req, res)=>{
        Task.find()
            .then(data=>res.json({info: data, message:'success'}))                                  // if only passing 1 param, don't need extra set of parentheses. Also, dont need the extra curly brackets. 
            .catch(err=>res.json({info: err, message:'failure'}))                                   // then & catch - can pass info and message as parameters in curly brackets
    },
    create_task: (req, res)=>{
        Task.create(req.body)
            .then(data=>res.json({info: data, message:'success'}))
            .catch(err=>res.json({info: err, message:'failure'}))
    },
    retrieve_task: (req, res)=>{
        Task.find({_id: req.params.id})
            .then(data=>res.json({info: data, message:'success'}))
            .catch(err=>res.json({info: err, message:'failure'}))
    },
    update_task: (req, res)=>{
        Task.update({_id: req.params.id}, req.body, {runValidators: true})
            .then(data=>res.json({info: data, message:'success'}))
            .catch(err=>res.json({info: err, message:'failure'}))
    },
    delete_task: (req, res)=>{
        Task.remove({_id: req.params.id})
            .then(data=>res.json({info: data, message:'success'}))
            .catch(err=>res.json({info: err, message:'failure'}))
    }
}