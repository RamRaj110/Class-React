import RestCard from "./RestCard"
import resList from "./RestData"

const Body = ()=>{
    
    return (
   <div>
    <div className='searchContainer'>
        <input type="text" placeholder='Search' />
        <button>Search</button>
    </div>
    <div className='body'>
       {/* <RestCard resData={resList[0]}/>
       <RestCard resData={resList[1]}/>
       <RestCard resData={resList[2]}/>
       <RestCard resData={resList[3]}/>
       <RestCard resData={resList[4]}/> */}

       {
        resList.map(restaurant => <RestCard key={restaurant.data.id} resData={restaurant}/>)
       }
             
       </div>
   </div>

    )
}

export default Body;