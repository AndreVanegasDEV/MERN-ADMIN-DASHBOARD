import mongoose from "mongoose";

const votanteSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
            trim: true,
        },
        ciudad: {
            type: String,
            required: true,
            trim: true,
        },
        cedula: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        celular: {
            type: String,
            required: true,
            min: 7,
            max: 10,
            unique: true,
            trim: true,
        },
        correo: {
            type: String,
            required: true,
            max: 50,
            unique: true,
            trim: true,
        },
        edad: {
            type: String,
            required: true,
            max: 3,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Votante = mongoose.model("votantes", votanteSchema);

export default Votante;