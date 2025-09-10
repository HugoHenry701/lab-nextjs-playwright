export interface Book {
  id: string;
  title: string;
  author: string;
}

export interface BooksData {
  books: Book[];
}

export interface BookVars {
  limit?: number;
}
