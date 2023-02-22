const {  } = require('express');
const User = require('../models/user.js');


const userGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
    });
}

const userPost = async (req, res) => {

    const body = req.body;
    const user = new User( body );

    await user.save();

    res.json({
        msg: 'post API - Controller',
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