import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#2E8A99] to-[#1B4F6E] text-white flex items-center justify-center rounded-lg font-bold">
              N
            </div>
            <span className="text-white font-bold">Nexve LLC</span>
          </div>
          <p className="text-xs">
            Digital innovation company building modern web & app solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-sm mb-3 font-semibold">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li>Products</li>
            <li>Services</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-sm mb-3 font-semibold">Products</h4>
          <ul className="space-y-2 text-xs">
            <li>PocketStor</li>
            <li>Phasil</li>
            <li>Nexve ERP</li>
            <li>Nexve POS</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-xs">
            <li>📧 hello@nexve.com</li>
            <li>📞 +1 555-789-2341</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs border-t border-gray-800 py-4">
        © {year} Nexve LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;