
const Banner = () => {
    return (
    <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/NZfQVp2/slide1.jpg" className="w-full rounded-3xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src='https://i.ibb.co/YtSyPKY/slide3.jpg' className="w-full rounded-3xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/444yXWK/slide2.jpg" className="w-full rounded-3xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        <h1  className='absolute text-white text-4xl lg:text-6xl text-center sm:mx-20 lg:mx-28 p-28 ml-5 font-bold'>Explore the Whole World <br />and Enjoy its Beauty</h1>
        
    </div>
    
    );
};

export default Banner;