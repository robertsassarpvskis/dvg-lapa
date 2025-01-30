import locatIC from "/src/assets/icons/location.svg";
import mailIC from "/src/assets/icons/mail.svg";
import callIC from "/src/assets/icons/call.svg";
import FooterLogo from "/src/assets/images/footer_logo.png";
import IconRG from "/src/assets/icons/icon_right_dark_green.svg";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import Youtube from "./Socials/Youtube";

const Footer = () => {
    return (
        <footer className="news-footer pt-20">
            <div className="container mx-auto px-2 md:px-4 pb-4 md:pb-12">
                <div className="bg-white border border-greenDark shadow-lg rounded-2xl px-5 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-3 flex flex-col justify-center">
                        <a href="/" className="flex justify-center mb-5">
                            <img
                                src={FooterLogo}
                                alt="Daugavpils Valsts ģimnāzija"
                                className="cursor-pointer max-w-[300px] w-full h-auto transition-all duration-500"
                            />
                        </a>

                            <p className="text-gray-700 leading-relaxed text-base">
                                Empowering minds and shaping futures since 1950. We are
                                committed to providing excellence in education and fostering
                                innovation.
                            </p>
                            <div className="flex space-x-4">
                                <Facebook />
                                <Instagram />
                                <Youtube />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-greenDark mb-6">Quick Links</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-4">
                                    <li>
                                        <a
                                            href="/about-us"
                                            className="flex text-gray-700 hover:text-greenDark transition-colors text-base group transform hover:scale-105"
                                        >
                                            <img
                                                src={IconRG}
                                                alt="x"
                                                className="transition-all duration-300 ease-in-out transform rotate-180"
                                            />
                                            <span className="font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:font-semibold">About Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/admissions"
                                            className="flex text-gray-700 hover:text-greenDark transition-colors text-base group transform hover:scale-105"
                                        >
                                            <img
                                                src={IconRG}
                                                alt="x"
                                                className="transition-all duration-300 ease-in-out transform rotate-180"
                                            />
                                            <span className="font-medium transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:font-semibold">Admissions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/academic-programs"
                                            className="flex text-gray-700 hover:text-greenDark transition-colors text-base group transform hover:scale-105"
                                        >
                                            <img
                                                src={IconRG}
                                                alt="x"
                                                className="transition-all duration-300 ease-in-out transform rotate-180"
                                            />
                                            <span className="font-medium transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:font-semibold">Academic Programs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/research"
                                            className="flex text-gray-700 hover:text-greenDark transition-colors text-base group transform hover:scale-105"
                                        >
                                            <img
                                                src={IconRG}
                                                alt="x"
                                                className="transition-all duration-300 ease-in-out transform rotate-180"
                                            />
                                            <span className="font-medium transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:font-semibold">Research</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-greenDark mb-6">Contact Us</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <a
                                        target="_blank"
                                        href="https://maps.app.goo.gl/J4UgD6BBGvsTfryL9"
                                        className="flex items-center text-gray-700 hover:text-greenDark transition-colors text-base group"
                                    >
                                        <img
                                            src={locatIC}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <span className="font-medium">Cietokšņa iela 33, Daugavpils, LV-5401</span>
                                    </a>
                                    <a
                                        href="tel:+37126481883"
                                        className="flex items-center text-gray-700 hover:text-greenDark transition-colors text-base group"
                                    >
                                        <img
                                            src={callIC}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <span className="font-medium">+371 26 481 883</span>
                                    </a>
                                    <a
                                        href="mailto:dvg@daugrc.edu.lv"
                                        className="flex items-center text-gray-700 hover:text-greenDark transition-colors text-base group"
                                    >
                                        <img
                                            src={mailIC}
                                            alt=""
                                            className="mr-3"
                                        />
                                        <span className="font-medium">dvg@daugrc.edu.lv</span>
                                    </a>
                                </div>
                                <div className="border-t border-[#D1DBC5] pt-6">
                                    <h4 className="text-xl font-semibold text-greenDark mb-4">
                                        Office Hours
                                    </h4>
                                    <div className="text-gray-700 space-y-3 mb-4">
                                        <p className="text-sm font-medium">Monday - Friday: 7:00 AM - 8:00 PM</p>
                                        <p className="text-sm font-medium">Saturday: Closed</p>
                                        <p className="text-sm font-medium">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-greenLight pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-700 text-sm">
                                © 2023 Academia. All rights reserved.
                            </div>
                            <div className="flex space-x-6">
                                <a href="/privacy-policy" className="text-gray-700 hover:text-greenLight text-sm">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
