import { Router } from 'express'
import {
    getPets,postPet, deletePet, updatePet,getPet ,pushNoti

} from  '../controller/pet'
const router = Router()

router.route('/pets').get(getPets).post(postPet)
router.route('/pets/:id').get(getPet).delete(deletePet).put(updatePet)
router.route('/sendnoti').post(pushNoti)
export default router