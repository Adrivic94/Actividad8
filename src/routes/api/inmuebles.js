const router = require("express").Router();
const InmuebleController = require('../../controllers/inmuebles.controller'); //Requiero las funciones de CRUD en el controlador para poder asociarlas a las rutas

router.get('/', InmuebleController.getInmuebles);
router.post("/", InmuebleController.createInmueble);
router.put("/:inmuebleId", InmuebleController.updateInmueble);
router.delete("/:inmuebleId", InmuebleController.deleteInmueble);

module.exports = router; 
