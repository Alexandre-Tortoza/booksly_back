import Book from "../models/bookModel.js";

class BookService {
  constructor(sql) {
    this.sql = sql;
  }
  async getAllBooks() {
    const result = await this.sql`SELECT * FROM books`;
    return result.map((row) => new Book(row));
  }
}

export default (sql) => new BookService(sql);
