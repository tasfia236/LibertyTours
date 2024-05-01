import { useEffect, useState } from "react";
import SingleSpot from "./SingleSpot";

const AllSpots = () => {

    const [spots, setSpots] = useState([]);


    useEffect(() => {
        fetch(' http://localhost:8000/tourspots')
        .then(res => res.json())
        .then((data) => {
            setSpots(data)
        });
    },[]);
    
    return (
        <div>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">All Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
            {
                spots.map(spots => <SingleSpot key={spots._id} spots={spots}></SingleSpot>)
            }
            </div>
        </div>
    );
};

export default AllSpots;