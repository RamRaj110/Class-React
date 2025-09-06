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
    // console.log(response);
    const resData =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setNewData(resData);
    setOrignalData(resData);
  };

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus) return (
  <h1>Sorry..Plz check your Internet connection.</h1>
  )

  return (
    <div>
      <div className="searchContainer">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("search btn is clicked");

            // console.log(newData.filter((res) => res.info.name.includes(searchText)));

            //   const searchData = newData.filter((res)=>
            //     res.info.name.includes(searchText)
            // )
            const searchData = orignalData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(searchData);

            setNewData(searchData);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filtrList = newData.filter((res) => res.info.avgRating > 4.2);
            setNewData(filtrList);
            console.log("btn of filtr");
          }}
        >
          Filter
        </button>
      </div>
      <div className="body">
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
