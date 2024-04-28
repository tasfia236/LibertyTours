import { Helmet } from "react-helmet";

const UpdateSpot = () => {

    const handleUpdateSpot = e => {
        e.preventDefault();
    }

    return (
        <div className="p-12 min-h-screen bg-base-200">
            <Helmet>
                <title>Liberty Tours | Update Tourist Spot</title>
            </Helmet>
            <div className="">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold">Add Tourrist Spot!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateSpot} className="card-body">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="image" className="block mb-2">Image URL:</label>
                                <input type="text" id="image" name="image" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="tourists_spot_name" className="block mb-2">Tourist Spot Name:</label>
                                <input type="text" id="tourists_spot_name" name="tourists_spot_name" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="country_Name" className="block mb-2">Country Name:</label>
                                <input type="text" id="country_Name" name="country_name" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2">Location:</label>
                                <input type="text" id="location" name="location" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="short_description" className="block mb-2">Short Description:</label>
                                <input type="text" id="short_description" name="description" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="average_cost" className="block mb-2">Average Cost:</label>
                                <input type="text" id="average_cost" name="average_cost" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="seasonality" className="block mb-2">Seasonality:</label>
                                <select id="seasonality" name="seasonality" className="w-full px-3 py-2 border rounded-md" required>
                                    <option value="summer">Summer</option>
                                    <option value="winter">Winter</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="travel_time" className="block mb-2">Travel Time:</label>
                                <input type="text" id="travel_time" name="travel_time" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="totaVisitorsPerYear" className="block mb-2">Total Visitors Per Year:</label>
                                <input type="text" id="totaVisitorsPerYear" name="totaVisitorsPerYear" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block mb-2">User Email:</label>
                                <input type="email" id="user_email" name="user_email" className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="user_name" className="">User Name:</label>
                                <input type="text" id="user_name" name="user_name" className="w-full px-3 py-2 border rounded-md" required />
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;