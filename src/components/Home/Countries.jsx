import { Fade } from "react-awesome-reveal";

const Countries = () => {
    return (
        <div>
        <h1 className="text-4xl text-center my-12 font-bold text-sky-800">Countries</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 ml-14 gap-y-12">
            <div className="">
                <img src="https://i.ibb.co/NZfQVp2/slide1.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-16 font-black text-white text-3xl'>
                    <p>Bangladesh</p>
                </Fade>
            </div>
            <div className="">
                <img src="https://i.ibb.co/YtSyPKY/slide3.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-20 font-black text-white text-3xl'>
                    <p>Indonesia</p>
                </Fade>
            </div>
            <div className="">
                <img src="https://i.ibb.co/444yXWK/slide2.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-20 font-black text-white text-3xl'>
                    <p>Malaysia</p>
                </Fade>
            </div>
            <div className="">
                <img src="https://i.ibb.co/pdZkLT5/Vietnam.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-20 font-black text-white text-3xl'>
                    <p>Vietnam</p>
                </Fade>
            </div>
            <div className="">
                <img src="https://i.ibb.co/BKdKmNc/Cambodia.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-20 font-black text-white text-3xl'>
                    <p>Cambodia</p>
                </Fade>
            </div>
            <div className="">
                <img src="https://i.ibb.co/C8RSqjX/thailand.jpg" className='h-44 w-[300px] opacity-85' />
                <Fade damping={1.6} className='text-center absolute -mt-24 ml-20 font-black text-white text-3xl'>
                    <p direction='right'>Thailand</p>
                </Fade>
            </div>
        </div>
    </div>
    );
};

export default Countries;