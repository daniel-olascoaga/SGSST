import { Router } from 'express'
const router = Router()

import * as workersCtrl from "../controllers/workersController";
import {authJwt}  from "../middewares";

router.post('/', [authJwt.verifyToken, authJwt.isUser], workersCtrl.createWorker)
router.get('/', workersCtrl.getWorkers)
router.get('/:workerId', workersCtrl.getWorkerById)
router.put('/:workerId', [authJwt.verifyToken], workersCtrl.updateWorkerById)
router.delete('/:workerId', [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin], workersCtrl.deleteWorkerById)

export default router;

