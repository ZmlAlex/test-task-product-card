import { useQuery } from 'react-query';
import product from '../data/product.json';

const getProductById = async (productId) => {
  // here should be real fetch request via axios with unique productId
  const { data } = await Promise.resolve(product);

  return data;
};

export default function useProduct(productId) {
  return useQuery(['product', productId], () => getProductById(productId));
}
