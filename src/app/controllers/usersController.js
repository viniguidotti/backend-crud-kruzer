const express = require('express');

const Users = require('../models/user');

const router = express.Router();

//Listagem Geral
router.get('/user', async (req, res) => {
    try {
        const user = await Users.find();

        return res.send( user );
    } catch {
        return res.status(400).send({ error: 'Error loading users' });
    }
});

//Listagem Unica
router.get('/user/:_id', async (req, res) => {
    try {
        const user = await Users.findById(req.params._id);
        user.password = undefined;

        return res.send(user);
    } catch (err) {
        return res.status(400).send({ error: 'Error updating user' });
    }
});

//Criação
router.post('/user', async (req, res) => {
    try {
        const { name, lastName, email, password, birthday } = req.body;
        if (await Users.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });

        const user = await Users.create(req.body);
        
        user.password = undefined;

        return res.send({ 
            user,
         });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

//Update de usuário
router.put('/user/:_id', async (req, res) => {
    try {
        const { name, email, password, birthday, updatedAt } = req.body;

        const user = await Users.findByIdAndUpdate(req.params._id, { 
            name,
            email, 
            password, 
            birthday,
            updatedAt: new Date,
        }, { new: true });
        
        user.password = undefined;

        return res.send({ 
            user,
         });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating user' });
    }
});

//Deletar
router.delete('/user/:_id', async (req, res) => {
    try {
        await Users.findByIdAndRemove(req.params._id);
        
        return res.send();
    } catch {
        return res.status(400).send({ error: 'Error deleting user' });
    }
    res.send({ user: req.userId });
});

//module.exports = app => app.use('/users', router);
module.exports = app => app.use('', router);