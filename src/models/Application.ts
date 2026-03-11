import mongoose, { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    startupName: {
      type: String,
      required: true,
    },

    stage: {
      type: String,
      required: true,
    },

    sector: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default models.Application || model("Application", ApplicationSchema);