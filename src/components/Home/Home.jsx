
import Banner from "../../layout/Banner";
import TravelCard from "../TravelCard/TravelCard";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import Countries from "./Countries";
import { Link } from "react-router-dom";
import Corners from "./Corners";
import video from "../../assets/Video.mp4";
import { AuthContext } from "../../Providers/AuthProviders";


const Home = () => {

    // const spots = useLoaderData();
    const [spots, setSpots] = useState([]);
    const [country, setCountry] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:8000/tourspots')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/country')
        .then(res => res.json())
        .then(data => setCountry(data));
    },[])

    return (
        <div>
            <Helmet>
                <title>
                    Liberty Tours | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                {
                    spots.slice(0, 6).map(spots => <TravelCard key={spots._id} spots={spots}></TravelCard>)
                }

            </div>
            <div className="flex justify-center pt-5">
                <Link to='/allspots'><button className="btn btn-active">All Tourist Spots</button></Link>
            </div>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Countries</h2>
            
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                {
                    country.map(country => <Countries key={spots._id} country={country}></Countries>)
                }
            </div>
            <Corners></Corners>
            <div>
                <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Video Section</h2>
                <video controls className="h-96 mx-auto">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Home;