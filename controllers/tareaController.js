const Tarea = require('../models/Tarea')
const Proyecto = require('../models/Proyecto')
const { validationResult } = require('express-validator')

// Crea uan nueva Tarea
exports.crearTarea = async (req, res) => {
    // Revisar si hiay errores
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json( {errores: errores.array()} )
    }

}