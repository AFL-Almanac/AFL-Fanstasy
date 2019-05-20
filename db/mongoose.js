const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kfl_new', {
    useNewUrlParser: true,
    useCreateIndex: true

})

//
// const Work = mongoose.model('Work', {
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required:true,
//         trim:true
//     },
//     completion: {
//         type: Boolean,
//         default:false
//     }
// })
//

// working.save().then(() => {
//     console.log(working)
// }).catch((error) => {
//     console.log("error", error)
//
// })