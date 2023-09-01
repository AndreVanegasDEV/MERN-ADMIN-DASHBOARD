import Votante from "../models/Votante.js";

const obtenerVotantes = async (req, res) => {
    const votantes = await Votante.find();
    res.json(votantes);
};

const agregarVotante = async (req, res) => {
    const votante = new Votante(req.body);

    try {
        const nuevovotante = votante.save();
        res.json(nuevovotante);
      } catch (error) {
        console.log(error);
      }
}

export { obtenerVotantes, agregarVotante };