const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema )


taskSchema.pre('save' , async function (next) {
    const task = this

    if(task.isModified('description')) {
        task.description = await bcrypt.hash(task.description, 8)
    }

    next()

})

module.exports = Task