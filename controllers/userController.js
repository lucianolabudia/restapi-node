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


    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password.toString(), salt );

    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

const userPut = async(req, res) => {

    const { id } = req.params;
    const { password, google, email, ...remaining } = req.body;

    // TODO validar contra base de datos
    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        remaining.password = bcryptjs.hashSync( password.toString(), salt );
    }

    const user = await User.findByIdAndUpdate(id, remaining);

    res.json({
        msg: 'put API - Controller',
        user
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