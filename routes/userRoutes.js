const { Router } = require('express');
const { check } = require('express-validator');

const { userGet, userPost, userPut, userPatch, userDelete } = require('../controllers/userController.js');

const router = Router();

router.get('/', userGet );

router.post('/', [
    check('email', 'El email no es valido').isEmail(),
],userPost);

router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);


module.exports = router;