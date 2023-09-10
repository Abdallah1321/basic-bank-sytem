import express from "express"
import { createUser, deleteUser, getUsers } from "../controllers/users.js"

const router = express.Router()


//Create User
router.post('/', createUser)

//Get User
router.get('/', getUsers)

//Delete User
router.delete('/:id', deleteUser)


export default router