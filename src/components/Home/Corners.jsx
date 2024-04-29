
import { MdFlight, MdHotel, MdOutlineWifiPassword, MdFastfood } from "react-icons/md";


const Corners = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between m-12 w-[80%]">
            <img className="w-[50%] ml-24" src="https://i.ibb.co/GsM94dx/travel.jpg" alt="" />
            <div className="w-[50%] text-left flex flex-col justify-center items-center ml-12">
                <h1 className="ml-12 text-2xl lg:text-4xl text-sky-600 font-black">Explore all corners of <br /> The world with us</h1>
                <p className="ml-12 my-5">Travel is fatal to prejudice and narrow mindedness. <br /> And many of our people need it sorely on these accounts. <br /> And many of our people need it sorely.</p>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                    <div className=" flex items-center gap-3 justify-between border-2 px-5 py-3 rounded-xl">
                        <MdFlight></MdFlight>
                        <p>Flight</p>
                    </div>
                    <div className=" flex items-center gap-3 justify-between border-2 px-5 py-3 rounded-xl">
                        <MdHotel></MdHotel>
                        <p>Hotel</p>
                    </div>
                    <div className=" flex items-center gap-3 justify-between border-2 px-5 py-3 rounded-xl">
                        <MdOutlineWifiPassword></MdOutlineWifiPassword>
                        <p>Wifi</p>
                    </div>
                    <div className=" flex items-center gap-3 justify-between border-2 px-5 py-3 rounded-xl">
                        <MdFastfood></MdFastfood>
                        <p>Food</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Corners;