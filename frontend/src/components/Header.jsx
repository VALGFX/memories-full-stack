import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline"; 


const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 border-b border-gray-200">
      {/* Stânga: Informații Contact */}
      <div className="flex items-center space-x-3">
        <PhoneIcon className="h-6 w-6 text-gray-600" />
        <div>
          <p className="text-sm font-semibold text-gray-900">067 553 659</p>
          <p className="text-xs text-gray-500">Centru de Asistență și Contact</p>
        </div>
      </div>

      {/* Dreapta: Link-uri Autentificare */}
      <div className="flex items-center space-x-4">
        <a href="/signup" className="text-sm font-medium text-gray-700 hover:text-blue-600">
          Cont nou
        </a>
        <span className="text-gray-400">|</span>
        <a href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">
          Autentificare
        </a>
        <span className="text-sm font-semibold text-gray-900">RO</span>
      </div>
    </header>
  );
};

export default Header;
