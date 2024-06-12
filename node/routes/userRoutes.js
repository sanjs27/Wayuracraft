import express from 'express';
import { register, login, getMe, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);
router.get('/:id', getUserById);

export default router;
