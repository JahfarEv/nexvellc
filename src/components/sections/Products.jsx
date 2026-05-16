import { motion } from "framer-motion";
import { products } from "../../data/products";
import ProductCard from "../common/ProductCard";
import useScrollReveal from "../../hooks/useScrollReveal";
import { fadeUpVariant } from "../../animations/variants";

const Products = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.section
      id="products"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="py-12 px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </motion.section>
  );
};

export default Products;