import { useLoaderData } from "react-router-dom";
import Banner from "../layout/Banner";
import TravelCard from "./TravelCard/TravelCard";

const Home = () => {

    const spots = useLoaderData();


    return (
        <div>
            <Banner></Banner>

            <h2 className="text-4xl text-center my-12">Categories: {spots.length}</h2>
            {
                spots.map(spots => <TravelCard key={spots._id} spots={spots}></TravelCard>)
            }



        </div>
    );
};

export default Home;