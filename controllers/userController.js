const {  } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user.js');


const userGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
    });
}

const userPost = async (req, res) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Verificar si el email existe

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password.toString(), salt );

    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

const userPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controller'
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete    
}