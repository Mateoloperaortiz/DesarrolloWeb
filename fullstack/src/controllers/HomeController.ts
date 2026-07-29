import type { Request, Response } from 'express';

import { books } from '../data/books.js';
import { Book } from '../models/Book.js';

interface ViewData {
  title: string;
  currentPath: '/' | '/about' | '/contact' | '/main-point';
}

interface BookParams {
  id: string;
}

export class HomeController {
  static index(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Home', currentPath: '/' };
    res.render('home/index', { viewData });
  }

  static about(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'About', currentPath: '/about' };
    res.render('home/about', { viewData });
  }

  static contact(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Contact', currentPath: '/contact' };
    res.render('home/contact', { viewData });
  }

  static Main_Point(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Books', currentPath: '/main-point' };
    res.render('home/books', { viewData, books });
  }

  static show(req: Request<BookParams>, res: Response): void {
    const rawId = req.params.id;
    if (!/^[1-9]\d*$/.test(rawId)) {
      res.status(404).send('Book not found');
      return;
    }

    const id = Number(rawId);
    if (!Number.isSafeInteger(id)) {
      res.status(404).send('Book not found');
      return;
    }

    const book = Book.findById(books, id);
    if (book === undefined) {
      res.status(404).send('Book not found');
      return;
    }

    const viewData: ViewData = {
      title: book.title,
      currentPath: '/main-point',
    };
    res.render('home/show', { viewData, book });
  }
}
