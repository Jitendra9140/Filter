import React from 'react';

export default function Filter({ filterData, category, setCategory }) {
  // Handler function to update the category
  function filterHandler(title) {
    setCategory(title);
  }
 

  return (
    
    <div className="flex gap-3 ">
      {filterData.map((data, key) => (
        <button
          className={`w-[200px] rounded ${
            category === data.title? 'bg-red-500 text-white' : 'bg-red-200'
          }`}
          key={data.title}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}



