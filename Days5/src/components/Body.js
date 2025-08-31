import RestCard from "./RestCard";
import { useState } from "react";
import resList from "./RestData";

const Body = () => {
  const [resLists, setResLists] = useState(resList);
  return (
    <div>
      <div className="searchContainer">
        <input type="text" placeholder="Search" />
        <button>Search</button>
        <button
          onClick={() => {
            const filtrList = resLists.filter((res) => res.data.avgRating > 4);
            setResLists(filtrList);
            
            console.log("btn of filtr");
          }}
        >
          Filter
        </button>
      </div>
      <div className="body">
        {/* <RestCard resData={resList[0]}/>
       <RestCard resData={resList[1]}/>
       <RestCard resData={resList[2]}/>
       <RestCard resData={resList[3]}/>
       <RestCard resData={resList[4]}/> */}

        {resLists.map((restaurant) => (
          <RestCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
