import v1UserRoutes from "./v1/user-route.js"
import express from 'express'

const router = express.Router()

router.use('/v1', v1UserRoutes)

export default router