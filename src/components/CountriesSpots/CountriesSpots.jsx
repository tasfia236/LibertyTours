
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CountriesSpots = () => {
    const countries = useLoaderData();
    var country = countries.country_Name;
    console.log(country);
   // const [countryplace, setCountryplace] = useState([]);

    // useEffect(() => {
    //     fetch(` http://localhost:8000/country/${country}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setCountryplace(data)
    //         console.log(data);
    //     })
    // }, [country])

    return (
        <div>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">{country}`s Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                {/* {
                countryplace.map(spots => <SingleSpot key={spots._id} spots={spots}></SingleSpot>)
            } */}
            </div>
        </div>
    );
};

export default CountriesSpots;