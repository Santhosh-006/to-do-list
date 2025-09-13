import ToDo from "../models/toDo.model.js";

export const TodoGetRequest = async (req, res) => {
  try {
    const todos = await ToDo.find();
    return res.json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const TodoCreateData = async (req, res) => {
  console.log(req.body);
  // validate Data
  const newTodo = new ToDo({
    title: req.body.title,
    isCompleted: req.body.isCompleted,
  });

  try {
    const todo = await newTodo.save();
    return res.json(todo);
  } catch (error) {
    return res.status(400).json({ message: "Already exists" });
  }
};

export const TodoUpdate = async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.isCompleted = !todo.isCompleted;
    const updatedTodo = await todo.save();

    return res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const TodoDelete = async (req, res) => {
  try {
    await ToDo.deleteOne({ _id: req.params.id });

    res.json({ message: "Todo deleted successfully..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
