import { Router } from 'express'
const router = Router()

import * as authCtrl from "../controllers/authController";
import { verifySignup } from "../middewares";

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router;