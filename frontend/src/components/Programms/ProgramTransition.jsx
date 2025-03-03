import ProgramCard from "./ProgramCard";
import bgImage from "/src/assets/images/dya7.jpg";

const ProgramTransition = () => {
    return ( 
        <div className="container  mx-auto px-4 sm:px-8 lg:px-4 pb-10">   
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""}/>
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""}/>
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""}/>
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""}/>
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""} />
            <ProgramCard title="Izglītība" description="Programmas apraksts šeit" backgroundImage={bgImage} date={""} />



            
          </div>
            
        </div>
    );
};

export default ProgramTransition;
