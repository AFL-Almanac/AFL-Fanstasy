require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const documentDelete = async (id) => {
    const deleted = await Task.findByIdAndDelete(id)
    const changeDelete = await Task.countDocuments({completed: false})
    return changeDelete
}

documentDelete('5cd53357ec76300af29991c6').then((result) => {
    console.log('deleted' ,result)
}).catch((e) => {
    console.log('was not successful ' , e)
})
