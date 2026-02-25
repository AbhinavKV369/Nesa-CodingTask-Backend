import Todo from "../models/todo.model.js";

export const handleCreateTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
    });
    res.status(201).status({
      success: true,
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

export const handleGetTodos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const [todos, total] = await Promise.all([
      Todo.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Todo.countDocuments(),
    ]);

    res.json({
      success: true,
      data: todos,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

export const handleUpdateTodos = async (req, res, next) => {
  try {
    const updatedTodo = await Todo.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.json({
      success: true,
      data: updatedTodo,
    });
  } catch (error) {
    next(error);
  }
};

export const handleDeleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deleteTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
     res.json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
