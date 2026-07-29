export class Book {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly category: string,
    public readonly price: number,
    public readonly stock: number,
  ) {}

  static findById(books: readonly Book[], id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }
}
