/* eslint-disable react/prop-types */
const BackgroundVideo = ({ src }) => (
    <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={src}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
    />
);

export default BackgroundVideo;
