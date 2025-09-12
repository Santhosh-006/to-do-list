import { model, Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

// Creating model

const ToDo = model("ToDo", schema);

export default ToDo;
