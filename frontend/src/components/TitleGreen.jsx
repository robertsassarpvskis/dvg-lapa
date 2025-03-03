const TitleGreen = ({ darkText, greenText }) => {
    return (
      <div className="flex justify-center my-5 sm:my-10 md:my-16 lg:my-10 px-6 text-center">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-black/85 leading-tight max-w-4xl">
          {darkText} <span className="text-greenDark">{greenText}</span>
        </h1>
      </div>
    );
  };
  
  export default TitleGreen;
  