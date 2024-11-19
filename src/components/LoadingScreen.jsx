/* eslint-disable react/prop-types */
const LoadingScreen = ({ page }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="animate-bounce text-6xl">🚀</div>
                        <p className="text-white text-lg font-bold">Launching to {page}...</p>
                    </div>
    )
}

export default LoadingScreen;