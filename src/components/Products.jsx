import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "./ui/cards";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(response.data);
    };
    handleData();
  }, []);

  return (
    <div>
      <div className="text-5xl pt-4 uppercase text-center">Today's Shows</div>
      <div className="max-w-8xl mx-auto px-8">
        <Cards items={data} />
      </div>
    </div>
  );
}

export default Products;
