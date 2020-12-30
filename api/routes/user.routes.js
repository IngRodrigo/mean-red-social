const express=require('express');

const UserController=require('../controllers/user.controller');

const api=express.Router();
//path home, el metodo de la clase controller que usara
api.get('/home', UserController.home);
api.get('/pruebas', UserController.pruebas );

module.exports=api;