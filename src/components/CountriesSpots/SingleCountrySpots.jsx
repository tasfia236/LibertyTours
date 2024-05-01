
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { SlPeople } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const SingleCountrySpots = ({ countryplace }) => {

    const { _id, image, country_Name, tourists_spot_name, description, average_cost, location, seasonality } = countryplace;

    return (
        <div className="card w-[350px] shadow-2xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="flex card-body flex-grow">
                <h3 className="card-title text-2xl font-bold">{tourists_spot_name}</h3>
                <div className="flex items-center gap-2 flex-grow"><FaLocationDot></FaLocationDot> {location}</div>
                <div className="card-actions justify-between">
                    <div className="font-bold">Travel Time: {country_Name}</div>
                </div>
                <hr />
                <h6 className=" flex-grow"><span className='font-bold'>Seasonality:  </span> {seasonality}</h6>
                <p><span className="font-bold">Description: </span>{description}</p>
                <hr />
                <div>
                    <p className='text-base'><span className='font-bold'>Average Cost:  </span>  ${average_cost}</p>
                </div>
                <div className='card-actions justify-center mt-2'>
                    <Link to={`/details/${_id}`}><button className='btn btn-sm bg-[#246286] text-white '>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCountrySpots;