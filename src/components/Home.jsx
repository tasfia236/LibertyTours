import { useLoaderData } from "react-router-dom";
import Banner from "../layout/Banner";
import TravelCard from "./TravelCard/TravelCard";

const Home = () => {

    const spots = useLoaderData();


    return (
        <div>
            <Banner></Banner>

            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Tourists Spots: {spots.length}</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
            {
                spots.slice(0,6).map(spots => <TravelCard key={spots._id} spots={spots}></TravelCard>)
            }
            </div>
        </div>
    );
};

export default Home;