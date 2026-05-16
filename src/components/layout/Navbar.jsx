// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const navItems = ["Home", "Products", "Upcoming", "Services", "Team"];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur shadow border-b"
//           : "bg-white/80 backdrop-blur"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           onClick={() => scrollTo("home")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] text-white flex items-center justify-center font-bold">
//             N
//           </div>
//           <span className="font-bold text-gray-800">
//             Nexve <span className="text-[#2E8A99]">LLC</span>
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 text-sm font-semibold">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollTo(item.toLowerCase())}
//               className="hover:text-[#2E8A99]"
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="md:hidden"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white border-t px-6 py-4 space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollTo(item.toLowerCase())}
//               className="block w-full text-left"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;







import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpeg";

const navItems = ["Home", "Products", "Upcoming", "Services", "Team"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* 🔥 Logo Section */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo with gradient border */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0F2B3D] to-[#2E8A99] p-[2px] shadow-md group-hover:scale-105 transition">
            <img
              src={logo}
              alt="Nexve Logo"
              className="w-full h-full object-cover rounded-xl bg-white"
            />
          </div>

          {/* Brand Name */}
          <span className="font-bold text-lg tracking-tight text-gray-800">
            {/* Nexve <span className="text-[#2E8A99]">LLC</span> */}
          </span>
        </div>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="relative group text-gray-700 hover:text-[#2E8A99] transition"
            >
              {item}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2E8A99] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t px-6 py-4 space-y-3 shadow"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-left text-gray-700 hover:text-[#2E8A99]"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;