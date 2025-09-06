import { useEffect,useState } from "react";
import { MENU_API } from "./libs";
// import { useParams } from "react-router-dom";

const useCstmRes = (id) => {
 
    const [resName, setResName] = useState();
    const [resItem, setResItem] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
        const url = `${MENU_API}${id}`;
        const data = await fetch(url);
        const res = await data.json();
        const itemCards =
        res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
        setResItem(itemCards);
        setResName(res?.data?.cards[2]?.card?.card?.info);
    }


    return resName,resItem;
}

export default useCstmRes;