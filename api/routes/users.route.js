import express from "express"
import { createUser, deleteUser, getUser, getUsers } from "../controllers/users.js"

const router = express.Router()


//Create User
router.post('/', createUser)

//Get Users
router.get('/', getUsers)

//Get User
router.get('/:id', getUser)

//Delete User
router.delete('/:id', deleteUser)


export default router