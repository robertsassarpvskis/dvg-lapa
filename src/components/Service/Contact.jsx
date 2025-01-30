const ContactCard = (props) => {
    return (
        <a
            href={props.Link}
            className="flex flex-col justify-between group p-5 bg-white rounded-lg shadow-md border-l-4 border-[#8b9d77] hover:shadow-lg transition-all duration-300"
            target="_blank"
        >
            <h3 className="text-2xl leading-7 font-bold mb-3 text-[#526144] transition-colors duration-300 group-hover:text-[#8b9d77]">
                {props.title}
            </h3>
            <p className="text-gray-600 leading-6 transition-colors duration-300 group-hover:text-gray-800">
                {props.text}
            </p>
            {props.children}
        </a>
    );
};

export default ContactCard;
