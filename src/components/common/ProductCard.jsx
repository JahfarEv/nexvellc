import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="p-6 border rounded-xl shadow">
      <div className="text-4xl">{product.icon}</div>
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.tagline}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </motion.div>
  );
};

export default ProductCard;