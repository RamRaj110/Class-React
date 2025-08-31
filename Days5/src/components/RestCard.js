const RestCard = (props)=>{
   const {resData} = props;
   const {name, cuisines,avgRating,area,costForTwoString} = resData?.data;
   
    return(
        <div className='card'>
           {/* <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          resData.data.cloudinaryImageId
        } alt="" />  */}
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.o3vW52jHWr5YT_nPmRj3PQHaHa%3Fpid%3DApi&f=1&ipt=5c92bfa75cc38c0edd4f6dc11877d6d7208b3621c4f5ec4909823914db87312b&ipo=images" alt="image" />
            <h2>{name}</h2>
            <h3>{area}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h3>Rating: {avgRating}</h3>
            <h4>{costForTwoString}</h4>
        </div>
    )
}
export default RestCard;