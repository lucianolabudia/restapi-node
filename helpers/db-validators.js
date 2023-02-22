const Role = require('../models/role');
const User = require('../models/user');


const isValidRole = async( role = '') => {
    const thereIsRol = await Role.findOne({ role });
    if ( !thereIsRol ) {
        throw new Error(`El rol ${role} no esta registrado en la BD`)
    }
}

const emailExists = async( email = '' ) => {

        // Verificar si el email existe
        const mailExists = await User.findOne({ email });
        if ( mailExists ) {
            throw new Error(`El email: ${ email }, ya esta registrado`);
        }
}

const userExistsByID  = async(id) => {

    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    isValidRole,
    emailExists,
    userExistsByID
}