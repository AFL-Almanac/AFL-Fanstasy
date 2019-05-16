const express = require('express')
const Task = require('../models/tasks')
const router = new express.Router()


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const tasks = await Task.findById(_id)
        if (!tasks) {
            return res.status(404).send()
        }
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const isValidOpetions = ['description', 'completed']
    const allowUpdates = updates.every((update) => isValidOpetions.includes(update))

    if (!allowUpdates) {
        return res.status(400).send({ error: 'Invalid Updates! ' })
    }

    try {

        const task = await Task.findById(_id)

        updates.forEach((update) => task[update] = req.body[update])

        await task.save()

        // const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {

        // const task = await Task.findByIdAndDelete(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        return res.status(500).send()
    }

})

module.exports = router
