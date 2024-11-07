class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }
  async getAllBooks(request, reply) {
    try {
      const books = await this.bookService.getAllBooks();
      reply.send({ books });
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }
}

export default (bookService) => new BookController(bookService);
