import { Router } from 'express'

import {
    createUser

} from  '../controller/user'

const router = Router()

router.route('/createUser').post(createUser)

export default router