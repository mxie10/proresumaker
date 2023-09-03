'use client'

import { useState } from "react";

const CollapsibleList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
        onClick={toggleExpansion}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <ul className="border border-gray-300 p-2">
          <li className="p-1">Item 1</li>
          <li className="p-1">Item 2</li>
          <li className="p-1">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default CollapsibleList;
