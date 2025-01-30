import { Children } from "react";

const ServiceImageSection = ({ Image, Title, text, children }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="flex justify-center items-center">
                <img
                    src={Image}
                    alt={Title}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
            </div>
            <div className="flex flex-col justify-center bg-white shadow-lg py-24 px-6 sm:py-10 sm:px-8 rounded-xl">
                <h2 className="text-2xl sm:text-3xl text-center font-bold text-greenDark mb-4 sm:mb-3">
                    {Title}
                </h2>
                <p className="text-sm sm:text-base  text-gray-700 mb-6 sm:mb-8">
                    {text}
                </p>
                {children}
            </div>
        </div>
    );
}

export default ServiceImageSection;
