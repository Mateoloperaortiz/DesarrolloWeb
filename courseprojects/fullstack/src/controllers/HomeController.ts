import type { Request, Response } from 'express';

interface ViewData {
  title: string;
  currentPath: '/' | '/about' | '/contact';
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
}
