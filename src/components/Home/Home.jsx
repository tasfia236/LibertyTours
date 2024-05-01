
import Banner from "../../layout/Banner";
import TravelCard from "../TravelCard/TravelCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Countries from "./Countries";
import { Link } from "react-router-dom";
import Corners from "./Corners";
import video from "../../assets/Video.mp4";
import { FadeLoader } from "react-spinners";


const Home = () => {

    // const spots = useLoaderData();
    const [spots, setSpots] = useState([]);
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(' http://localhost:8000/tourspots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });

    }, []);

    useEffect(() => {
        fetch(' http://localhost:8000/country')
        .then(res => res.json())
        .then(data => {
          setCountry(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
  
    }, [])

    return (
        <div>
            <Helmet>
                <title>
                    Liberty Tours | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Tourists Spots</h2>
            {loading ? ( // Conditionally render the spinner if loading is true
                <div className="flex justify-center items-center -mt-36 h-64">
                    <FadeLoader color="#36D7B7" loading={loading} size={40} />
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                    {spots.slice(0, 6).map(spot => <TravelCard key={spot._id} spots={spot} />)}
                </div>
            )}

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