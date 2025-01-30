import PDF from "/src/assets/icons/pdf.svg";

const HyperLinkDoc = ({ Link, Title }) => {
    return (
        <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center w-full  text-base sm:text-lg bg-greenLight text-greenDark font-bold py-3 px-4 sm:py-2 sm:px-3 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
        >
            <img 
                src={PDF} 
                alt="PDF" 
                className="w-8 sm:w-10 h-auto mr-3 filter transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
            />
            <span className="transition-colors duration-300 group-hover:text-white">
                {Title}
            </span>
        </a>
    );
};

export default HyperLinkDoc;
