import HeaderHome from '../components/Header.jsx';
import TitleGreen from '../components/TitleGreen.jsx';
import ProgramTransition from "../components/Programms/ProgramTransition.jsx";
import GreenBar from '../components/Home/GreenBar.jsx';
import MissionBar from '../components/Home/MissionBar.jsx';
import SponsorBar from '../components/Home/SponsorBar.jsx';
import HomeNews from '../components/Home/HomeNews.jsx';
import GoogleMap from "/src/components/Map.jsx";

const HomePage = () => {
    return ( 
        <div className='bg-whiteGray'>
            <HeaderHome />
            <HomeNews />
            <MissionBar />
            <div className="my-24">
                <TitleGreen darkText={"Mūsu"} greenText={"Programmas"}/>
                <ProgramTransition />
            </div>
            <GreenBar />
            <SponsorBar />
            <GoogleMap Link={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.563307200161!2d26.51796417711157!3d55.87024268293916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2952053898b7d%3A0x19c0cf85ee65eff6!2sDaugavpils%20Valsts%20%C4%A3imn%C4%81zija!5e0!3m2!1slv!2slv!4v1738211965813!5m2!1slv!2slv"}/>

        </div>
        
     );
}
 
export default HomePage;