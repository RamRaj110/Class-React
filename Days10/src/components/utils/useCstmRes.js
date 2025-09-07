import { useEffect, useState } from "react";
import { MENU_API } from "./libs";

const useCstmRes = (id)=>{
    const [resItem, setResItem] = useState("");
    const [resName,setResName] = useState("");
    

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const URL = `${MENU_API}${id}`;
        const data = await fetch(URL);
        const json = await data.json();
        console.log(json);
        
         const itemCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        console.log(itemCards);
        setResItem(itemCards);
            setResName(json?.data?.cards[2]?.card?.card?.info);

        
    }
    return {resItem,resName};

}
export default useCstmRes;
