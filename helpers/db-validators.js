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

module.exports = {
    isValidRole,
    emailExists
}