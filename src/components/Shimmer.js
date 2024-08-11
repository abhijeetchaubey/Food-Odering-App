const Shimmer = () => {
    return (
        <div className="shimmer-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {Array(15).fill("").map((_, index) => (
                <div key={index} className="shimmer-card rounded-lg bg-gray-200 h-32 md:h-40 lg:h-48 animate-pulse"></div>
            ))}
        </div>
    );
};

export default Shimmer;
