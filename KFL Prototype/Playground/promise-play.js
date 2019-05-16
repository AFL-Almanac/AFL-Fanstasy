require('../src/db/mongoose')
const User = require('../src/models/user')

// // 5cd379b987bcf0385e9a7bea
// User.findByIdAndUpdate('5cd37a45e9889239afe39b70', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age :1})
//     }).then((result) => {
//         console.log(result)
//     })
//     .catch((e) => {
//         consol.log(e)
//     })

const documentDelete = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const cont = await User.countDocuments({age})
    return cont
}

documentDelete('5cd37a45e9889239afe39b70', 29).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})