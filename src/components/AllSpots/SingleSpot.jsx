import PropTypes from 'prop-types'
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SingleSpot = ({spots}) => {
    
    const { _id, image, tourists_spot_name, average_cost, location, travel_time, seasonality } = spots;

    return (
        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h3 className="card-title text-2xl flex-grow font-bold">{tourists_spot_name}</h3>
                <div className="flex items-center gap-2"><FaLocationDot></FaLocationDot> {location}</div>
                <hr />
                <h6 className=" flex-grow"><span className='font-bold'>Seasonality:  </span> {seasonality}</h6>

                <div>
                    <p className='text-base'><span className='font-bold'>Average Cost:  </span>  {average_cost}</p>
                </div>
                <hr />
                <div className="card-actions justify-between">
                    <div className="font-bold">Travel Time: {travel_time}</div>
                </div>
                <div className='card-actions justify-center mt-2'>
                    <Link to={`/update/${_id}`} ><button className='btn btn-sm btn-success border-white text-white'>Update</button></Link>
                    <Link to={`/details/${_id}`}><button className='btn btn-sm bg-[#246286] text-white '>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

SingleSpot.propTypes = {
    spots: PropTypes.object
};

export default SingleSpot;