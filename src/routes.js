import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Tiago Jaques',
    email: 'tjaquespereira@gmail.com',
    password_hash: 'skabra',
  });
  return res.json(user);
});
*/

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
