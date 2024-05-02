import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Table from "./Table";

const MyList = () => {

    const { user, loading } = useContext(AuthContext) || {};
    //  console.log(user);
    const [place, setPlace] = useState([]);
    console.log(place);

    useEffect(() => {
        fetch(` https://liberty-tours-server.vercel.app/mylist/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
                //    console.log(data);
            });
    }, [user]);

    const [loadspots, setLoadspots] = useState(place); 

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return (
        <div className=" gadgetContainer pt-10">
            <table className="table table-zebra">
                <thead>
                    <tr className="text-center">
                        <th>Tourist Spot</th>
                        <th>Location</th>
                        <th>Seasonality</th>
                        <th>Average Cost</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        place.map(place => <Table
                            key={place._id}
                            place={place}
                            loadspots={loadspots}
                            setLoadspots={setLoadspots}
                        ></Table>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyList;