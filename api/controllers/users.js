import userSchema from "../models/User.js";


export const createUser = async (req, res, next) => {
  try {
    const user = await userSchema.create(req.body);
    const redir = { redirect: "/" };
    res.json(redir);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await userSchema.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await userSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: deletedUser,
    });
  } catch (error) {
    next(error);
  }
};