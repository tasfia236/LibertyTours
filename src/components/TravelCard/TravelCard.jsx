import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import Swal from 'sweetalert2';

const TravelCard = ({ spots }) => {

    const { _id, image, tourists_spot_name, average_cost, location, travel_time, seasonality } = spots;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/tourspots/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                    <Link to={`/`} ><button className='btn btn-sm btn-success border-white text-white'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error border-white text-white'>Delete</button>
                    <Link to={`/details/${_id}`}><button className='btn btn-sm bg-[#246286] text-white '>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;

TravelCard.propTypes = {
    spots: PropTypes.object
};