import { useState } from "react";

const AboutGrocerry = ({ title, des ,setIsVisible, isVisible}) => {
//   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border p-10 shadow-md rounded-xl m-10">
        
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      {isVisible && <p className="text-gray-600 text-sm">{des}</p>}
      <div className="flex justify-end mt-2 gap-2 ">
        {isVisible ? (
          <button
            className="border ml-2 p-2 rounded-xl"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className=" border p-2 mr-2 rounded-xl"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>
    </div>
  );
};

const Grocerry = () => {
    const [visibleSec,setIsVisibleSec] = useState("");

  return (
    <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 mt-10 text-center">Grocerry</h1>
      <AboutGrocerry
        title="First "
        des="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        "
        isVisible={visibleSec === "first"}
        setIsVisible={(value)=>{
            setIsVisibleSec(value?"first":"")
        }}
      />
      <AboutGrocerry
        title="Second "
        des="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        "
         isVisible={visibleSec === "second"}
        setIsVisible={(value)=>{
            setIsVisibleSec(value?"second":"")
        }}
      />
      <AboutGrocerry
        title="Third  "
        des="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem voluptates, sapiente suscipit assumenda distinctio sunt hic quae? Nam maxime dolores vitae, aut eius dignissimos eaque, voluptas nemo animi quo minus ipsa perspiciatis vel quidem adipisci at molestiae voluptates sit!
        "
         isVisible={visibleSec === "third"}
       setIsVisible={(value)=>{
            setIsVisibleSec(value?"third":"")
        }}
      />
    </div>
  );
};

export default Grocerry;
