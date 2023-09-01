import Lider from "../models/Lider.js";

const obtenerLideres = async (req, res) => {
    const lideres = await Lider.find();
    res.json(lideres);
};

const agregarLider = async (req, res) => {
    const lider = new Lider(req.body);

    try {
        const nuevoLider = lider.save();
        res.json(nuevoLider);
      } catch (error) {
        console.log(error);
      }
}

export { obtenerLideres, agregarLider };