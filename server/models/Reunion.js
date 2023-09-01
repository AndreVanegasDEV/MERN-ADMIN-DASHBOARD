import mongoose from "mongoose";

const reunionSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 2,
            max: 100,
            trim: true,
        },
        zona: {
            type: String,
            required: true,
            trim: true,
        },
        fecha: {
            type: String,
            required: true,
            trim: true,
        },
        hora: {
            type: String,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Reunion = mongoose.model("reuniones", reunionSchema);

export default Reunion;