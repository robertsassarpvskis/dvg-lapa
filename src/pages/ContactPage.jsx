import NewsHeader from "../components/NewsHeader";
import ServiceImageSection from "../components/Service/ServiceImageSection";
import ContactCard from "/src/components/Service/Contact.jsx";
import Image from "/src/assets/images/dvg-20-001_max.jpg"; 
import GoogleMap from "/src/components/Map.jsx";

const ContactPage = () => {
    const contacts = [
        {
            title: "Direktore Oksana Petaško:",
            email: "oksana.petasko@daugrc.edu.lv",
            phone: "+371 29274877"
        },
        {
            title: "Direktores vietniece (mācību darbs) Signita Gabrāne:",
            email: "oksana.petasko@daugrc.edu.lv",
            phone: "+371 29274877"
        },
        {
            title: "Direktores vietniece izglītības jomā (audzināšanas darbs) Sandra Rutkovska:",
            email: "oksana.petasko@daugrc.edu.lv",
            phone: "+371 29274877"
        },
        {
            title: "Direktores vietniece izglītības jomā (metodiskais un projektu darbs) Renāte Malnace:",
            email: "oksana.petasko@daugrc.edu.lv",
            phone: "+371 29274877"
        }
    ];
    
    return ( 
        <div className="bg-whiteGray">
            <NewsHeader Heading={"Mūsu"} HeadingGreen={"Kontakti"} text={"Ja jums ir jautājumi vai vēlaties uzzināt vairāk par mūsu pakalpojumiem, lūdzu, sazinieties ar mums! Mēs esam gatavi palīdzēt un atbildēsim uz visiem jūsu jautājumiem pēc iespējas ātrāk."}/>
            <div className="container mx-auto px-4">
                <ServiceImageSection Title={"Kontakti"} Image={Image}
                text={
                    <>
                        <p className="text-[#526144] font-semibold">
                            Adrese: Cietokšņa iela 33, Daugavpils, LV-5401
                        </p>
                        <p className="text-[#526144] font-semibold">
                            E-adrese: 
                            <a target="_blank" href="https://vpm.viss.gov.lv/LVP.STS/Account/Login?ReturnUrl=%2FLVP.STS%2Fwsfed%2Fcallback%3FauthzId%3D1240DC9A8D06E6ED1DA8A8B20D5920D2B69F385F7DD21647FF462BD1295E4D46&ui-culture=lv" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                Daugavpils Valsts ģimnāzija - 
                            </a>
                            <a href="mailto:oksana.petasko@daugrc.edu.lv" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                Kā izmantot e-adresi
                            </a>
                        </p>
                        <p className="text-[#526144] font-semibold">
                            E-pasts:
                            <a href="mailto:dvg@daugrc.edu.lv" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                dvg@daugrc.edu.lv
                            </a>
                        </p>
                        <p className="text-[#526144] font-semibold">
                            Kontakttālrunis:
                            <a href="tel:+37126481883" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                26481883
                            </a> 
                            (darba dienās no plkst. 9.00 līdz plkst. 17.00)
                        </p>
                    </>
                }
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ContactCard title="Direktore Oksana Petaško:">
                        <p className="text-[#526144] font-semibold">
                            E-pasts:  
                            <a href="mailto:oksana.petasko@daugrc.edu.lv" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                oksana.petasko@daugrc.edu.lv
                            </a>
                            <br />
                            Kontakttālrunis:  
                            <a href="tel:+37129274877" className="text-[#8b9d77] hover:text-[#526144] ml-2">
                                29274877
                            </a>                        
                            <br />
                            Apmeklētāju pieņemšanas laiks: <span className="text-[#8b9d77]">iepriekš vienojoties</span>
                        </p>
                    </ContactCard>
                    
                </div>
                <div className="py-14">
                 <GoogleMap  Link={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.563307200161!2d26.51796417711157!3d55.87024268293916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2952053898b7d%3A0x19c0cf85ee65eff6!2sDaugavpils%20Valsts%20%C4%A3imn%C4%81zija!5e0!3m2!1slv!2slv!4v1738211965813!5m2!1slv!2slv"}/>
                </div>
                
            </div>
        </div>
    );
}

export default ContactPage;
