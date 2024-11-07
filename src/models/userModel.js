/* Esse arquivo define a estrutura do usuário e pode
 incluir funções para interagir com o banco de dados.
 */

// O Model representa a estrutura e o gerenciamento dos dados do sistema.
// Ele define como os dados são armazenados, manipulados e acessados.

class User {
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export default User;
