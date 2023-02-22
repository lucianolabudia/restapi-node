const Role = require('../models/role');

const isValidRole = async( role = '') => {
    const thereIsRol = await Role.findOne({ role });
    if ( !thereIsRol ) {
        throw new Error(`El rol ${role} no esta registrado en la BD`)
    }
}


module.exports = {
    isValidRole
}