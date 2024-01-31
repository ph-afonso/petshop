//Imports Libs
import { Request, Response } from 'express';

//Controller de Page
export const home = (req: Request, res: Response) => {
    res.send('Home Controller');
    //res.render('pages/page);
}

export const dogs = (req: Request, res: Response) => {
    //res.render('pages/page);
}

export const cats = (req: Request, res: Response) => {
    //res.render('pages/page);
}

export const fishes = (req: Request, res: Response) => {
    //res.render('pages/page);
}