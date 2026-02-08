import {
  createProduct,
  readAllProducts,
  updateProduct,
} from './productFunctions.js';

const runTest = async () => {
  try {
    const product = await createProduct({
      name: 'Mechanical Keyboard',
      price: 4500.75,
      description: 'RGB Backlit, Brown Switches',
      in_stock: true,
    });
    console.table(product);

    const allProducts = await readAllProducts();
    console.table(allProducts);

    const updated = await updateProduct(false, product.id);
    console.log(updated.in_stock, updated.name);
  } catch (error) {
    console.error('Error Occurred:', error.message);
  }
};

runTest();
