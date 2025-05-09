import express from 'express';
import { createCallRoom, joinCallRoom } from '../controller/callController.js';
const router = express.Router();

router.post('/create', createCallRoom);
router.post('/join', joinCallRoom);

export default router;