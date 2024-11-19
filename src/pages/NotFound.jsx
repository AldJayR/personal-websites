import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100 text-black font-roboto">
            <h1 className="text-9xl font-bold">
                &#128531;
            </h1>
            <p className="text-4xl mt-8">Page Not Found</p>
            <button onClick={handleClick} className="mt-6 bg-cyan-400 py-3 px-6 rounded-3xl text-white hover:bg-cyan-600">Back to Selection</button>
        </div>
    )
}

export default NotFound;