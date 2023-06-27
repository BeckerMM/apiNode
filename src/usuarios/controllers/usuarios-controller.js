const express = require('express');
const routes = express.Router();
const User = require('../models/usuario')

function createRoute(){
    routes.post('/usuarios', async(req, res) =>{
        console.log('Create',req.body)
        await User.create(req.body);
        res.json();
    });
}

function findAllRoute(){
    routes.get('/usuarios', (req, res) =>{
        console.log('FindAll',req.body)
        res.json();
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:id', (req, res) =>{
        console.log('FindById',req.params);
        res.json();
    });
}

function updateRoute(){
    routes.put('/usuarios', (req, res) =>{
        console.log('Update',req.body)
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/usuarios/:id', (req, res) =>{
        console.log(req.params);
        res.json([]);
    });
}


function registerUserRoutes(){
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    createRoute();
    return routes;
}
module.exports = registerUserRoutes;
