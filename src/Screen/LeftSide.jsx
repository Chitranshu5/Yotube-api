import React from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="text-lg text-gray-700 hover:text-orange-500"
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="text-lg text-gray-700 hover:text-orange-500"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="service"
            className="text-lg text-gray-700 hover:text-orange-500"
          >
            Service
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftSide;
