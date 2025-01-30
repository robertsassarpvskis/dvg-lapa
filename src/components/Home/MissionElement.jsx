import { Children } from "react";

const MissonElement = (props) => {
    return (
        <a
            href={props.Link}
            className="group p-5 bg-white rounded-lg shadow-md border-l-4 border-[#8b9d77] hover:shadow-lg hover:translate-y-[-5px] hover:bg-[#f7f8f5] transition-all duration-300"
            target="_blank"
        >
            <img
                src={props.icon}
                alt="Mission icon"
                className="w-12 h-12 mb-2 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#526144] transition-colors duration-300 group-hover:text-[#8b9d77]">
                {props.title}
            </h3>
            <p className="text-gray-600 leading-6 transition-colors duration-300 group-hover:text-gray-800">
                {props.text}
            </p>
            {props.children}
        </a>
    );
};

export default MissonElement;
