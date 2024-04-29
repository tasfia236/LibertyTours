
import video from '../../assets/video.mp4';

const VideoPlayer = () => {

    return (
        <div>
            <div>
                <h2>Video Section</h2>
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>This is a video section demonstrating some content.</p>
            </div>
        </div>
    );
};

export default VideoPlayer;