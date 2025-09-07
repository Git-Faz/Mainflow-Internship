import express from 'express'
import { getProducts, getProductById, getProductsByCategory } from '../controllers/products.js '

const router = express.Router();

router.get('/', getProducts)
router.get('/id/:id', getProductById)
router.get('/category/:category', getProductsByCategory)

export default router;