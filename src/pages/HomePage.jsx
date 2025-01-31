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
            <GreenBar />
            <div className="my-24">
                <TitleGreen darkText={"Mūsu"} greenText={"Programmas"}/>
                <ProgramTransition />
            </div>
            <SponsorBar />
            <GoogleMap />

        </div>
        
     );
}
 
export default HomePage;