const inmuebleModel = require("../models/inmueble.model"); //Requiero al modelo para poder interactuar con él

//Creo las funciones CRUD para asociarlas a inmuebles.js
const getInmuebles = async (req, res) => {
  try {
    const inmuebles = await inmuebleModel.find();
    res.json(inmuebles);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createInmueble = async (req, res) => {
  try {
    const creation = await inmuebleModel.create(req.body);
    res.json(creation);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateInmueble = async (req, res) => {
  try {
    const { inmuebleId } = req.params;
    const result = await inmuebleModel.findByIdAndUpdate(inmuebleId, req.body, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const deleteInmueble = async (req, res) => {
  try {
      const { inmuebleId } = req.params;
      const result = await inmuebleModel.findByIdAndDelete(inmuebleId);
      res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getInmuebles, createInmueble, updateInmueble, deleteInmueble };