import ProgramCard from "./ProgramCard";

const ProgramTransition = () => {
    return ( 
        <div className="container  mx-auto mb-10 px-2 sm:px-4 lg:px-16">   
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <ProgramCard title={"Izglītība"}/>
            <ProgramCard title={"Uzņemšana"}/>
            <ProgramCard title={"Skolēniem"}/>
            <ProgramCard title={"Bibliotēka"}/>
            <ProgramCard title={"Sasniegumi"}/>
            <ProgramCard title={"Projekti"}/>


            
          </div>
            
        </div>
    );
};

export default ProgramTransition;
