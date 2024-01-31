//Imports Libs
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

//Configuração da porta: Dotenv
dotenv.config();

//Inicialização do servidor: Express
const server = express();

//Configurações da View Engine: Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configuração de pasta publica
server.use(express.static(path.join(__dirname, '../public')));

//Rotas

//Configuração da porta de acesso do servidor
server.listen(process.env.PORT);
