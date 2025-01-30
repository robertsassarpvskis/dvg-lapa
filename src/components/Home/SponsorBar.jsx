import TitleGreen from "../TitleGreen";
import SponsorElement from "./Sponsors";
import GI from "/src/assets/sponsor/GI.jpg";
import aus from "/src/assets/sponsor/aus.jpg";
import uzdevumi from "/src/assets/sponsor/uzdevumi.png";
import MultiKey from "/src/assets/sponsor/MultiKey-10.jpg";
import LV100 from "/src/assets/sponsor/lv100_logo.png";
import MinKB from "/src/assets/sponsor/LR_min_kabinets.png";
import UKLV from "/src/assets/sponsor/atbalsts-ukrainai2-scaled-1.jpg";
import LatgalesLaiks from "/src/assets/sponsor/latgales_laiks.jpg";
import teatris from "/src/assets/sponsor/teatris.jpg";
import LCB from "/src/assets/sponsor/lcb.jpg";
import DU from "/src/assets/sponsor/du.jpg";
import Daugavpils from "/src/assets/sponsor/daugavpils.jpg";
import DPIP from "/src/assets/sponsor/DPIP.jpg";
import LRIZM from "/src/assets/sponsor/LR_IZM_logo.png";
import eklase from "/src/assets/sponsor/eklase.png";
import VISC from "/src/assets/sponsor/visclogo.png";
import EU from "/src/assets/sponsor/eu.jpg";
import ASF from "/src/assets/sponsor/asf.jpg";
import ETWING from "/src/assets/sponsor/etwinning.jpg";
import ERASMUS from "/src/assets/sponsor/erasmus.jpg";
import TF from "/src/assets/sponsor/tf.jpg";
import SPZ from "/src/assets/sponsor/SPZ.jpg";


const SponsorBar = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto text-center px-2 sm:px-4 lg:px-16">
                <h1 className="text-5xl font-bold text-black/85 mt-10">
                    Sabiedrība un <span className="text-greenDark">Atbalstītāji</span>
                </h1>
                <p className="text-gray-600 text-center text-lg mt-3 mb-8">
                    We are grateful to our sponsors and supporters who make our work possible.
                </p>
                <div className="columns-5 gap-3 items-stretch mx-auto py-8">
                    <SponsorElement sponsor={GI} name="Google For Education" />
                    <SponsorElement sponsor={aus} name="Sponsor 2" />
                    <SponsorElement sponsor={uzdevumi} name="Sponsor 3" />
                    <SponsorElement sponsor={MultiKey} name="Sponsor 4" />
                    <SponsorElement sponsor={LV100} name="Sponsor 5" />
                    <SponsorElement sponsor={MinKB} name="Sponsor 6" />
                    <SponsorElement sponsor={UKLV} name="Sponsor 7" />
                    <SponsorElement sponsor={LatgalesLaiks} name="Sponsor 8" />
                    <SponsorElement sponsor={teatris} name="Sponsor 9" />
                    <SponsorElement sponsor={LCB} name="Sponsor 10" />
                    <SponsorElement sponsor={DU} name="Sponsor 11" />
                    <SponsorElement sponsor={Daugavpils} name="Sponsor 12" />
                    <SponsorElement sponsor={DPIP} name="Sponsor 13" />
                    <SponsorElement sponsor={LRIZM} name="Sponsor 14" />
                    <SponsorElement sponsor={eklase} name="Sponsor 15" />
                    <SponsorElement sponsor={VISC} name="Sponsor 16" />
                    <SponsorElement sponsor={EU} name="Sponsor 17" />
                    <SponsorElement sponsor={ASF} name="Sponsor 18" />
                    <SponsorElement sponsor={ETWING} name="Sponsor 19" />
                    <SponsorElement sponsor={ERASMUS} name="Sponsor 20" />
                    <SponsorElement sponsor={TF} name="Sponsor 21" />
                    <SponsorElement sponsor={SPZ} name="Sponsor 22" />
                </div>
            </div>
        </div>
    );
};

export default SponsorBar;
                    


