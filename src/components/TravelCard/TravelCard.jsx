import PropTypes from 'prop-types'

const TravelCard = ({spots}) => {

    const { image, tourists_spot_name, average_cost, totaVisitorsPerYear, travel_time, seasonality } = spots;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p>{average_cost}</p>
                <p>{totaVisitorsPerYear}</p>
                <p>{travel_time}</p>
                <p>{seasonality}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;

TravelCard.propTypes = {
    spots: PropTypes.object
};