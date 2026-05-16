import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Custom hook for scroll animations
const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Card hover animation variants
const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, type: "spring", stiffness: 300 }
  }
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -10, 10, -5, 5, 0],
    scale: 1.1,
    transition: { duration: 0.5 }
  }
};

// Products Data
const products = [
  {
    name: "PocketStor",
    tagline: "Marketplace Platform for Shop Owners & Customers",
    icon: "📦",
    gradient: "from-indigo-50 to-blue-50",
    description:
      "PocketStor is a comprehensive marketplace platform that connects shop owners with customers in their locality. Shop owners can register, list products, and manage orders while customers can discover local shops, search by location or product name, and place orders easily.",
    website: "https://poketstor.com/",
  },
  {
    name: "Phasil.in",
    tagline: "Innovative Video Rental Platform",
    icon: "🎬",
    gradient: "from-purple-50 to-pink-50",
    description:
      "Phasil is an innovative video rental platform providing access to a wide range of self-help and motivational videos. Rent videos for specific durations, get AI-powered recommendations, and watch on any device with offline viewing support.",
    website: "https://pasil.in/",
  },
];

// Upcoming Projects Data
const upcomingProjects = [
  {
    name: "Nexve ERP",
    tagline: "Next-Generation Enterprise Resource Planning",
    icon: "⚙️",
    gradient: "from-slate-50 to-gray-100",
    description:
      "A comprehensive ERP solution designed for modern businesses to streamline operations, manage resources, and drive growth.",
    features: [
      "Financial Management",
      "Supply Chain Management",
      "HR Management",
      "CRM Integration",
      "Business Intelligence",
      "Project Management",
    ],
    releaseDate: "Q3 2025",
    status: "In Development",
  },
  {
    name: "Nexve POS",
    tagline: "Smart Point of Sale for Retail & Hospitality",
    icon: "🛒",
    gradient: "from-emerald-50 to-teal-50",
    description:
      "A powerful, cloud-based POS system that transforms how retail stores, restaurants, and businesses process transactions and manage operations.",
    features: [
      "Fast Checkout",
      "Inventory Sync",
      "Customer Management",
      "Sales Analytics",
      "Multi-Store Support",
      "Offline Mode",
      "Payment Integration",
    ],
    releaseDate: "Q4 2025",
    status: "Coming Soon",
  },
];

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      } py-3 px-6 md:px-12`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("home")}
        >
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="w-16 h-16 rounded-xl"
          >
            <img
              src="/logo.jpeg"
              alt="Nexve Logo"
              className="w-full h-full rounded-xl"
            />
          </motion.div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-gray-800">
              Nexve <span className="text-[#2E8A99]">LLC</span>
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          {["Home", "Products", "Upcoming", "Services", "Team"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="relative group hover:text-[#1B6B7A] transition-all duration-300 text-sm font-semibold"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1B4F6E] to-[#2E8A99] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-[#1B4F6E] to-[#2E8A99] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-xl transition-all"
          >
            Contact Us
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="flex flex-col p-4 gap-2">
          {["Home", "Products", "Upcoming", "Services", "Team"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-gray-600 py-2 text-left font-medium hover:text-[#1B6B7A] transition-colors"
            >
              {item}
            </button>
          ))}
          <button className="bg-gradient-to-r from-[#1B4F6E] to-[#2E8A99] text-white px-5 py-2 rounded-full text-sm font-semibold w-full mt-2">
            Contact Us
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const { ref, controls } = useScrollReveal();
  const [typedText, setTypedText] = useState("");
  const words = [
    "Enterprise Solutions",
    "ERP Systems",
    "POS Platforms",
    "Digital Transformation",
  ];

  useEffect(() => {
    let currentWord = 0;
    let currentChar = 0;
    let isDeleting = false;

    const type = () => {
      const fullWord = words[currentWord];
      if (isDeleting) {
        setTypedText(fullWord.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setTypedText(fullWord.substring(0, currentChar + 1));
        currentChar++;
      }

      if (!isDeleting && currentChar === fullWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }

      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length;
        setTimeout(type, 500);
        return;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      id="home"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-36 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 w-full"
          >
            <motion.div variants={staggerItem} className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <span className="text-slate-900">Where </span>
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
                  Innovation
                </span>
                <br />
                <span className="text-slate-900">Meets </span>
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Execution
                </span>
              </h1>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xl md:text-2xl text-slate-600">
                  Powering
                </span>
                <div className="relative">
                  <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                    {typedText}
                  </span>
                  <span className="absolute -right-3 top-0 w-0.5 h-7 bg-gradient-to-b from-blue-600 to-cyan-600 animate-blink"></span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 justify-center pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start a Project →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm"
              >
                View Solutions
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="pt-6 border-t border-slate-100"
            >
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                  <p className="text-xs text-slate-500">Client Retention</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-xs text-slate-500">Enterprise Clients</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500">Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Product Card Component with Attractive Animation
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className={`group bg-gradient-to-br ${product.gradient} rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer`}
    >
      <div className="p-6">
        <motion.div variants={iconVariants} className="text-5xl mb-3">
          {product.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-[#2E8A99] font-semibold text-xs mt-1">
          {product.tagline}
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed text-sm">
          {product.description}
        </p>
        {product.website && product.website !== "#" && (
          <motion.a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-block mt-4 text-[#1B4F6E] font-semibold text-sm hover:underline"
          >
            Visit Website →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

// Products Section
const Products = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.section
      id="products"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="bg-gradient-to-br from-gray-50 to-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-wider text-[#2E8A99] font-semibold bg-[#E9F4F7] px-3 py-0.5 rounded-full inline-block">
            flagship products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Our companies &{" "}
            <span className="bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
              innovations
            </span>
          </h2>
          <p className="text-gray-500 mt-2">
            Driving the next-gen digital experience through dedicated platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Upcoming Card Component with Attractive Animation
const UpcomingCard = ({ project, index }) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className={`group bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <motion.div variants={iconVariants} className="text-4xl">{project.icon}</motion.div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{project.status}</span>
            <span className="text-xs text-gray-500">🚀 {project.releaseDate}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-3">{project.name}</h3>
        <p className="text-[#2E8A99] font-semibold text-xs mt-1">{project.tagline}</p>
        <p className="text-gray-600 mt-2 leading-relaxed text-sm">{project.description}</p>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs font-bold text-gray-800 mb-2">Key Features:</p>
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 4).map((feature, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-xs bg-white/60 text-gray-700 px-2 py-0.5 rounded-full shadow-sm"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Upcoming Projects Section
const Upcoming = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.section
      id="upcoming"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="py-12 px-6 bg-gradient-to-br from-slate-50 to-indigo-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-wider text-purple-600 font-semibold bg-purple-100 px-3 py-0.5 rounded-full inline-block">coming soon</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Upcoming <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Innovations</span>
          </h2>
          <p className="text-gray-500 mt-2">Exciting new solutions on the horizon to transform your business operations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingProjects.map((project, idx) => (
            <UpcomingCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Services Section - Redesigned
// const Services = () => {
//   const { ref, controls } = useScrollReveal();

//   const handleNavigate = () => {
//     window.open('https://nexvecore.com', '_blank');
//   };

//   // All services combined with better categorization
//   const allServices = [
//     {
//       category: "Web Applications",
//       icon: "🌐",
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-50 to-cyan-50",
//       items: [
//         {
//           name: "SaaS Application",
//           description: "Cloud-based software solutions with subscription management, multi-tenancy, and scalable infrastructure.",
//           features: ["User Authentication", "Payment Integration", "Analytics Dashboard", "API Development"],
//           icon: "☁️"
//         },
//         {
//           name: "E-commerce Store",
//           description: "Full-featured online stores with product management, cart functionality, and secure checkout.",
//           features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
//           icon: "🛍️"
//         },
//         {
//           name: "POS Application",
//           description: "Point of Sale systems for retail, restaurants, and businesses with inventory management.",
//           features: ["Inventory Tracking", "Sales Reports", "Customer Management", "Offline Mode"],
//           icon: "💳"
//         }
//       ]
//     },
//     {
//       category: "Business Websites",
//       icon: "🏢",
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-50 to-pink-50",
//       items: [
//         {
//           name: "Portfolio Website",
//           description: "Showcase your work, skills, and achievements with stunning visual layouts.",
//           features: ["Project Gallery", "Client Testimonials", "Contact Form", "Blog Integration"],
//           icon: "🎨"
//         },
//         {
//           name: "Professional Business Website",
//           description: "Corporate websites that establish credibility and drive conversions.",
//           features: ["Service Pages", "Team Profiles", "Newsletter Signup", "SEO Optimized"],
//           icon: "💼"
//         }
//       ]
//     }
//   ];

//   return (
//     <motion.section
//       id="services"
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={fadeUpVariant}
//       className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Company Header with Navigation */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex justify-between items-center mb-12 pb-4 border-b-2 border-gray-200"
//         >
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
//               Nexve Core
//             </h1>
//             <p className="text-xs text-gray-500">Software Development Company</p>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNavigate}
//             className="flex items-center gap-2 bg-gradient-to-r from-[#0F2B3D] to-[#1B4F6E] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-xl transition-all duration-300"
//           >
//             <span>Visit NexveCore.com</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//             </svg>
//           </motion.button>
//         </motion.div>

//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block rounded-full bg-gradient-to-r from-[#E9F4F7] to-[#D4EAF0] px-4 py-1 text-xs font-medium text-[#1B4F6E] shadow-sm"
//           >
//             🚀 What We Offer
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-bold mt-4 text-gray-800"
//           >
//             Web & Application{' '}
//             <span className="bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
//               Development
//             </span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg"
//           >
//             Comprehensive development solutions tailored to your business needs
//           </motion.p>
//         </div>

//         {/* Services Grid */}
//         {allServices.map((category, catIdx) => (
//           <motion.div
//             key={catIdx}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: catIdx * 0.2 }}
//             className="mb-16"
//           >
//             {/* Category Header */}
//             <div className="flex items-center gap-3 mb-8">
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className={`text-3xl w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}
//               >
//                 {category.icon}
//               </motion.div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
//                 <div className={`w-20 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-1`}></div>
//               </div>
//             </div>

//             {/* Service Cards Grid */}
//             <div className={`grid gap-6 ${
//               category.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
//             }`}>
//               {category.items.map((service, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={cardHoverVariants}
//                   initial="initial"
//                   whileHover="hover"
//                   className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer`}
//                 >
//                   {/* Animated Border Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
//                   <div className="p-6 relative z-10">
//                     <div className="flex items-start justify-between mb-3">
//                       <motion.div
//                         variants={iconVariants}
//                         className={`text-4xl w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-md`}
//                       >
//                         {service.icon}
//                       </motion.div>
//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       >
//                         ✨
//                       </motion.div>
//                     </div>
                    
//                     <h4 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h4>
//                     <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    
//                     <div className="pt-4 border-t border-gray-200">
//                       <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
//                         <span>🔧</span> Key Features
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {service.features.map((feature, fIdx) => (
//                           <motion.span
//                             key={fIdx}
//                             whileHover={{ scale: 1.05, y: -2 }}
//                             className={`text-xs bg-white/80 text-gray-700 px-2.5 py-1 rounded-full shadow-sm border border-${category.gradient.split(' ')[1]}/20`}
//                           >
//                             {feature}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}

//         {/* CTA Banner - Enhanced */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 bg-gradient-to-r from-[#0F2B3D] via-[#1B4F6E] to-[#2E8A99] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl"
//         >
//           {/* Animated Background Pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
//           </div>
          
//           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <motion.p 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center md:justify-start"
//               >
//                 <span>🚀</span> Ready to build your project?
//               </motion.p>
//               <motion.p 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="text-blue-100 text-base mt-2"
//               >
//                 Let's discuss your requirements and bring your idea to life.
//               </motion.p>
//             </div>
//             <motion.button 
//               whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleNavigate}
//               className="bg-white text-[#0F2B3D] px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group"
//             >
//               <span>Start a project</span>
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
//               >
//                 →
//               </motion.span>
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Statistics Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
//         >
//           {[
//             { number: "150+", label: "Projects Delivered", icon: "✅" },
//             { number: "50+", label: "Happy Clients", icon: "😊" },
//             { number: "24/7", label: "Support Available", icon: "🔄" },
//             { number: "99%", label: "Client Satisfaction", icon: "⭐" }
//           ].map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
//             >
//               <div className="text-2xl mb-1">{stat.icon}</div>
//               <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
//               <div className="text-xs text-gray-500">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };




// Services Section - Simplified
const Services = () => {
  const { ref, controls } = useScrollReveal();

  const handleNavigate = () => {
    window.open('https://nexvecore.com', '_blank');
  };

  const services = [
    { name: "Web Applications", icon: "🌐", gradient: "from-blue-500 to-cyan-500" },
    { name: "E-commerce Store", icon: "🛍️", gradient: "from-emerald-500 to-teal-500" },
    { name: "POS Application", icon: "💳", gradient: "from-purple-500 to-pink-500" },
    { name: "Portfolio Website", icon: "🎨", gradient: "from-orange-500 to-red-500" },
    { name: "Business Website", icon: "🏢", gradient: "from-indigo-500 to-blue-500" },
    { name: "SaaS Platform", icon: "☁️", gradient: "from-cyan-500 to-blue-500" },
  ];

  return (
    <motion.section
      id="services"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Company Header */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
              Nexve Core
            </h1>
            <p className="text-xs text-gray-500">Software Development Company</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0F2B3D] to-[#1B4F6E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
          >
            <span>Visit NexveCore.com</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block rounded-full bg-[#E9F4F7] px-3 py-0.5 text-xs font-medium text-[#1B4F6E]">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Web & Application{' '}
            <span className="bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              onClick={handleNavigate}
              className="bg-white rounded-xl p-4 text-center cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className={`text-3xl w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-md mb-3`}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-[#2E8A99] transition-colors">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0F2B3D] to-[#1B4F6E] rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl"
        >
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold">Ready to build your project?</p>
            <p className="text-blue-100 text-sm mt-1">
              Visit NexveCore.com for detailed service information and pricing.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="bg-white text-[#0F2B3D] px-6 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-all"
          >
            Explore Services →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
// Team Section
const Team = () => {
  const { ref, controls } = useScrollReveal();

  const teamMembers = [
    {
      id: 1,
      name: "Navas",
      role: "CEO & Founder",
      bio: "Visionary leader driving innovation and digital transformation across global markets.",
      icon: "👨‍💼",
      iconColor: "from-blue-500 to-cyan-500",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 2,
      name: "Jahfar",
      role: "Software Engineer",
      bio: "Expert in building scalable systems, microservices architecture, and high-performance applications.",
      icon: "💻",
      iconColor: "from-purple-500 to-pink-500",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 3,
      name: "Gogul",
      role: "Application Developer",
      bio: "Specialized in creating seamless mobile and web applications with cutting-edge technologies.",
      icon: "📱",
      iconColor: "from-emerald-500 to-teal-500",
      linkedin: "#",
      twitter: "#",
    },
    {
      id: 4,
      name: "Vinod",
      role: "Financial Head",
      bio: "Strategic financial planning and risk management expert ensuring sustainable business growth.",
      icon: "💰",
      iconColor: "from-amber-500 to-orange-500",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <motion.section
      id="team"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="py-12 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase text-[#2E8A99] tracking-wider bg-[#E9F4F7] px-3 py-0.5 rounded-full inline-block">
            the minds behind
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Meet our{" "}
            <span className="bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] bg-clip-text text-transparent">
              core team
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-2">
            Dedicated experts driving Nexve, PocketStor & Phasil.com forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.iconColor} flex items-center justify-center text-4xl shadow-lg mb-4`}
                >
                  {member.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-[#2E8A99] text-xs font-semibold mt-1">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed text-center">
                {member.bio}
              </p>
              <div className="flex gap-2 justify-center mt-4">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600 hover:text-[#1B4F6E] hover:bg-gray-200 transition-all cursor-pointer"
                >
                  🐦
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600 hover:text-[#1B4F6E] hover:bg-gray-200 transition-all cursor-pointer"
                >
                  🔗
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          ✨ +15 dedicated engineers, designers & strategists globally
        </div>
      </div>
    </motion.section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#2E8A99] to-[#1B4F6E] flex items-center justify-center font-bold text-white shadow-md">N</div>
            <span className="text-white text-lg font-bold">Nexve LLC</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">Parent company of PocketStor & Phasil.com. Digital innovation at scale.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Explore</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">Team</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Products</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li className="hover:text-white cursor-pointer transition">PocketStor</li>
            <li className="hover:text-white cursor-pointer transition">Phasil.com</li>
            <li className="hover:text-white cursor-pointer transition">Nexve ERP</li>
            <li className="hover:text-white cursor-pointer transition">Nexve POS</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Connect</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li>📧 hello@nexve.com</li>
            <li>📞 +1 (555) 789-2341</li>
            <li>📍 Delaware, USA</li>
            <li className="text-xs mt-2">© {currentYear} Nexve LLC</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-5 text-center text-gray-500 text-xs">
        Innovation meets reliability — website & app development for modern enterprises.
      </div>
    </footer>
  );
};

// Add custom CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
  }
  .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-blink { animation: blink 1s step-end infinite; }
`;
document.head.appendChild(style);

// Main App Component
const App = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Upcoming />
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;