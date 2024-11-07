/*
  O controlador lida com as requisições HTTP e chama os 
  serviço necessários para processar cada requisição.
*/
class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getAllUsers(request, reply) {
    try {
      const users = await this.userService.getAllUsers();
      reply.send({ users });
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async getUserById(request, reply) {
    try {
      const user = await this.userService.getUserById(request.params.id);
      reply.send({ user });
    } catch (error) {
      reply.status(404).send({ error: error.message });
    }
  }

  async createUser(request, reply) {
    try {
      const user = await this.userService.createUser(request.body);
      reply.status(201).send({ user });
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }
}

export default (userService) => new UserController(userService);
