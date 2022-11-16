import { Router } from 'express'
const router = Router()

import * as userCtrl from "../controllers/userController";
import { authJwt, verifySignup } from "../middewares";

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser)

export default router;