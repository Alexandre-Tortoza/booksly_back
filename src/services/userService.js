// import UserModel from '../models/userModel.js';
/*
  O serviço userService é responsável pela lógica de negócios,
  como validação de dados ou cálculos.
*/
//O Service é responsável pela lógica de negócios da aplicação.
//  Ele é o intermediário entre o Controller e o Model,sendo responsável por processar os dados.
//  O Service também se conecta ao banco de dados

import User from "../models/userModel.js";

class UserService {
  constructor(sql) {
    this.sql = sql;
  }

  async getAllUsers() {
    const result = await this.sql`SELECT * FROM users`;
    return result.map((row) => new User(row));
  }

  async getUserById(id) {
    const result = await this.sql`SELECT * FROM users WHERE id = ${id}`;
    if (result.length === 0) throw new Error("Usuário não encontrado");
    return new User(result[0]);
  }

  async createUser(data) {
    const { name, email } = data;
    const [user] = await this.sql`
      INSERT INTO users (name, email)
      VALUES (${name}, ${email})
      RETURNING *
    `;
    return new User(user);
  }
}

export default (sql) => new UserService(sql);
