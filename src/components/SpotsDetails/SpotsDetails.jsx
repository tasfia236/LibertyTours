import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const SpotsDetails = () => {

    const spots = useLoaderData();
    console.log(spots);
    const { id } = useParams();
    const spot = spots.find(estate => estate._id === id);
    console.log(spot);


     return (
        <h1>id: {id}</h1>
    //     <div className="m-3 p-5 flex flex-col justify-center items-center">
    //         <Helmet>
    //             <title>Liberty Tours | Place Details</title>
    //         </Helmet>

    //         <h2 className="text-4xl font-bold mb-12">Property Details</h2>
    //         <div className="w-fit mx-auto">
    //             <img className="w-fit h-280px lg:h-[380px] md:h-[350px] sm:h-[300px]" src={spot.image} alt="" />
    //         </div>
    //         <div className=" px-28">
    //             <h1 className="py-5 font-bold text-2xl sm:text-4xl">{spot.tourists_spot_name} </h1>
    //             <p className="font-medium w-fit bg-[#2e7e8a] text-white rounded-xl px-2 py-1 text-base sm:text-xl">{spot.country_Name}</p>
    //             <p className="py-3 font-medium text-base sm:text-xl"><span className="font-bold">Location:  </span> {spot.location} </p>

    //             <hr />
    //             <p className="pb-3 font-medium text-base sm:text-xl"><span className="font-bold py-3">Description: </span> {spot.description}</p>
    //             <hr />
    //             <div className="flex gap-8">
    //                 <div>
    //                     <p className="gap-5 py-3"><span className="text-gray-500">Price: </span></p>
    //                     <p className="gap-5 py-3"><span className="text-gray-500">Seasonality: </span> </p>
    //                     <p className="gap-5 py-3"><span className="text-gray-500">Travel Time: </span></p>
    //                     <p className="gap-5 py-3"><span className="text-gray-500">Total Visitors: </span></p>
    //                 </div>
    //                 <div className="text-bold">
    //                     <p className="gap-5 py-4 sm:py-3">{spot.average_cost}</p>
    //                     <p className="gap-5 py-4 sm:py-3">{spot.seasonality}</p>
    //                     <p className="gap-5 py-4 sm:py-3">{spot.travel_time}</p>
    //                     <p className="gap-5 py-4 sm:py-3">{spot.totaVisitorsPerYear}</p>

    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    );
};

export default SpotsDetails;