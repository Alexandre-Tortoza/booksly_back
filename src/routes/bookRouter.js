import bookServiceFactory from "../services/bookService.js";
import bookControllerFactory from "../controllers/bookController.js";

async function bookRoutes(server) {
  const bookService = bookServiceFactory(server.sql); // Cria instância do BookService corretamente
  const BookController = bookControllerFactory(bookService); // Cria instância do BookController com o serviço injetado

  server.get("/books", BookController.getAllBooks.bind(BookController)); // Usa `.bind` para garantir o contexto correto
}

export default bookRoutes;
