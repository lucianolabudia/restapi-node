const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, emailExists } = require('../helpers/db-validators');

const { userGet, userPost, userPut, userPatch, userDelete } = require('../controllers/userController.js');


const router = Router();

router.get('/', userGet );

router.post('/', [
    // Middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mas de 6 letras').isLength({ min: 6 }),
    check('email').custom( emailExists ),
    // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    validateFields
],userPost);

router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);


module.exports = router;