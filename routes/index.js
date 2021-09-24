import express from 'express';

const router = express.Router();

import { home, Student_information } from '../controllers';

router.get('/getdata', home.getData);

router.post('/register', Student_information.create);
router.get('/users', Student_information.show);
router.delete('/users/:id', Student_information.destroy);
router.put('/users/:id', Student_information.updateUser);
export default router;