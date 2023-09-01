import Reunion from "../models/Reunion.js";

const obtenerReuniones = async (req, res) => {
    const reuniones = await Reunion.find();
    res.json(reuniones);
};

const agregarReunion = async (req, res) => {
    const reunion = new Reunion(req.body);

    try {
        const nuevaReunion = reunion.save();
        res.json(nuevaReunion);
      } catch (error) {
        console.log(error);
      }
}

export { obtenerReuniones, agregarReunion };