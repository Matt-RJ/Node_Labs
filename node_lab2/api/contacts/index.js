import express from 'express';
import {contacts} from './contacts';

const router = express.Router(); // eslit-disable-line
router.get('/', (req, res) => {
  res.send({contacts: contacts});
});

export default router;