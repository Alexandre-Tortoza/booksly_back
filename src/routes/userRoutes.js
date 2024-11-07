// src/routes/userRoutes.js
import userServiceFactory from "../services/userService.js";
import userControllerFactory from "../controllers/userController.js";

async function userRoutes(server) {
  const userService = userServiceFactory(server.sql);
  const UserController = userControllerFactory(userService);

  server.get("/users", UserController.getAllUsers.bind(UserController));
  server.get("/users/:id", UserController.getUserById.bind(UserController));
  server.post("/users", UserController.createUser.bind(UserController));
}

export default userRoutes;
