const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    task : {
        type:String,
        required:true

    },
    status :{
        type:String,
        enum:['Pending','In-Progress','Completed'],
        default:'Pending'
    },
    deadline:{
        type:Date,
        required:false
    },
}, {timestamps:true}
)
 const tasks = mongoose.model('Task',taskSchema)

 module.exports = tasks;