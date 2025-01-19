import { getAllProducts, getProductsById } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductsByIdController = async (req, res, next) => {
  const { id } = req.params;

  const data = await getProductsById(id);

  if (!data) {
    res.status(404).json({
      status: 404,
      message: 'Products is not found',
    });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${id}!`,
    data: data,
  });
};
