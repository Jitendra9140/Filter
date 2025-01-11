import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";

const App = () => {
  const [courses, setCourses] = useState({});
  const [category, setCategory] = useState(filterData[0].title);
  

  useEffect(() => {
    const fetchData = async () => {
   
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (e) {
        console.log("Something went wrong");
      }
     
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      <Cards courses={courses} category={category} />
    </div>
  );
};

export default App;
