import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import { API_URL } from "./utils/libs";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [orignalData, setOrignalData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const response = await data.json();
    const resData =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setNewData(resData);
    setOrignalData(resData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1 className="text-3xl text-center text-gray-600 mt-20">
        Sorry.. Please check your Internet connection.
      </h1>
    );

  return (
    <div className="container mx-auto p-6">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
        <input
          className="w-full sm:w-1/2 p-3 pl-4 text-sm text-gray-700 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="flex gap-2">
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-xl shadow-sm transition"
            onClick={() => {
              const searchData = orignalData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setNewData(searchData);
            }}
          >
            Search
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-5 rounded-xl shadow-sm transition"
            onClick={() => {
              const filtrList = newData.filter((res) => res.info.avgRating > 4.2);
              setNewData(filtrList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
