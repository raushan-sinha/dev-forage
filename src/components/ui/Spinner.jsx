const Spinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm animate-pulse">
                Loading...
            </p>
        </div>
    );
};

export default Spinner;