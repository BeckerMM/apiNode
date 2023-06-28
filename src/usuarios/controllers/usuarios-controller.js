const express = require('express');
const routes = express.Router();
const User = require('../models/usuario');
const { where } = require('sequelize');

function createRoute(){
    routes.post('/usuarios', async(req, res) =>{
        console.log('Create',req.body)
        await User.create(req.body);
        res.json();
    });
}

function findAllRoute(){
    routes.get('/usuarios', async(req, res) =>{
        res.json(await User.findAll());
       
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:id', async(req, res) =>{   
        res.json(await User.findOne({where: {id: req.params.id}}));
    });
}

function updateRoute(){
    routes.put('/usuarios', async(req, res) =>{
        
        res.json(await User.update(req.body, {
            where: {
                id: req.body.id
            }
        }));
    });
}

function removeRoute(){
    routes.delete('/usuarios/:id', async(req, res) =>{
        console.log(req.params);
        res.json(await User.destroy({where: {id: req.params.id}}));
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
