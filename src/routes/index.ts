//Libs
import { Router } from 'express';

//Controllers
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

//Configurando Rotas
const router = Router();

//Rotas da Home
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//Rotas Search
router.get('/search', SearchController.search);

export default router;
