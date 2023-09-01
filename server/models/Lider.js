import mongoose from "mongoose";

const liderSchema = mongoose.Schema(
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
    },
    {
        timestamps: true,
    }
);

const Lider = mongoose.model("lideres", liderSchema);

export default Lider;