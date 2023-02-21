const {  } = require('express');


const userGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
        query
    });
}

const userPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API - Controller',
        body
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