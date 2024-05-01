import { useEffect, useState } from "react";
import SingleSpot from "./SingleSpot";

const AllSpots = () => {

    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState('Sorted By');

    useEffect(() => {
        fetch('http://localhost:8000/tourspots')
            .then(res => res.json())
            .then((data) => {
                setSpots(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sorted = [...spots];
        sorted.sort((a, b) => {
            if (option === "asc") {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
        setSpots(sorted);
    };


    return (
        <div>
            <div className="flex justify-center my-4 ">
                <select className="bg-sky-800 text-white font-bold p-4 rounded-xl" id="sort" value={sortOption} onChange={handleSortChange}>
                    <option disabled>Sorted By</option>
                    <option value="asc">Average Cost Low to High</option>
                    <option value="desc">Average Cost High to Low</option>
                </select>
            </div>
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