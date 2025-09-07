import products from '../models/product.js';

export const getProducts = async (req, res) =>{
    try{
        const allProducts = await products.find({})
        res.status(200).json(allProducts);
    } catch(err) {
        res.status(500).json({message: err.message})
        console.warn(err);
    }
}

export const getProductById = async (req, res) => {
    try {
        console.log(req.params);
        
        const product = await products.findById(req.params.id);
        console.log(req.params.id);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.warn(err);
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const prods = await products.find({category: new RegExp(`^${req.params.category}$`, 'i')})
        console.log( req.params.category);

        if (prods.length > 0) {
            res.status(200).json(prods)
        } else {
            res.status(404).json({ message: 'Category not found' })
        }
    } catch (err) {
        res.status(500).json({message: err.message})
        console.warn(err)
    }
}