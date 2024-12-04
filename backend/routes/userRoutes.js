const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Rota específica para registro de usuários
router.post("/register", UserController.createUser);

// Outras rotas
router.post("/", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;