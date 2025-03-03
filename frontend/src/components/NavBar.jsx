import { useState } from "react";
import { Link } from "react-router-dom"; // <-- Import Link from react-router-dom
import Logo from "/src/assets/images/footer_logo.png";
import Dropdown from "./DropDownButton";
import icon from "/src/assets/icons/icon_right_dark_green.svg";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Toggle dropdown
  };

  return (
    <div className="bg-greenLight pt-2 md:pt-6 sm:pt-4">
      <div className="container mx-auto px-2">
        <div className="bg-white border border-greenDark py-4 shadow-lg  rounded-2xl sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/"> {/* <-- Use Link instead of <a> */}
                <img
                  src={Logo}
                  alt="Logo"
                  className="cursor-pointer ms-5 w-28 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            <div className="lg:hidden flex justify-end flex-1 me-10">
              <button
                className="text-gray-700"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <span className="text-2xl">&#9776;</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center gap-8 text-gray-700 font-medium flex-1">
              <Link to="/news" className="hover:text-green-700 transition">
                Aktualitātes
              </Link>

              <Dropdown
                title="Par Mums"
                wide={true}
                links={[
                  {
                    label: (
                      <Link to="/contact" className="block hover:text-greenDark transition py-1">
                        Kontakti
                      </Link>
                    ),
                  },
                  { label: (
                    <Link to="/kolektīvs" className="block hover:text-greenDark transition py-1">
                      Kolektīvs
                    </Link>
                  ),},
                  { label: (
                    <Link to="/vesture" className="block hover:text-greenDark transition py-1">
                      Tradīcijas, Vēsture, Simboli
                    </Link>
                  ), 
                  },
                  { label: (
                    <Link to="/līdzpārvalde" className="block hover:text-greenDark transition py-1">
                      Skolēnu Līdzpārvalde
                    </Link>
                  ), 
                  },
                  { label: (
                    <Link to="/padome" className="block hover:text-greenDark transition py-1">
                      Ģimnāzijas Padome
                    </Link>
                  ), 
                  },
                ]}
              />
              <Link to="/student" className="hover:text-green-700 transition">
                Skolēniem
              </Link>
              <Link to="/parents" className="hover:text-green-700 transition">
                Vecākiem
              </Link>
              <Link to="/admission" className="hover:text-green-700 transition">
                Uzņemšana
              </Link>
              <Dropdown
                title="Izglītība"
                links={[
                  {  label: (
                    <Link to="/" className="block hover:text-greenDark transition py-1">
                      Formālā izglītība
                    </Link>
                  ), 
                },
                  {  label: (
                    <Link to="/" className="block hover:text-greenDark transition py-1">
                      Karjeras Izglītība
                    </Link>
                  ), },
                  {  label: (
                      <Link to="/interests" className="block hover:text-greenDark transition py-1">
                        Interešu izglītība
                      </Link>
                    ), 
                  },
                  {  label: (
                    <Link to="/" className="block hover:text-greenDark transition py-1">
                      "Līderis Manī"
                    </Link>
                  ), 
                },
                ]}
              />
              <Dropdown
                title="Pakalpojumi"
                links={[
                  { label: (
                    <Link to="/dorms" className="block hover:text-greenDark transition py-1">
                      Dienesta Viesnīca
                    </Link>
                  ), },
                  { label: (
                    <Link to="/" className="block hover:text-greenDark transition py-1">
                      Sporta Komplekss
                    </Link>
                  ),  },
                  { label: (
                    <Link to="/" className="block hover:text-greenDark transition py-1">
                      Telpu Noma
                    </Link>
                  ),  },
                ]}
              />
              <Link to="/library" className="hover:text-green-700 transition">
                Bibliotēka
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Attached to Nav Bar) */}
          {isMenuOpen && (
            <div
            className={`lg:hidden bg-whiteGray rounded-b-2xl mt-6 transition-all duration-500 ${
              isMenuOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="flex flex-col text-gray-700 font-medium gap-4 text-center text-lg py-5 px-4 rounded-xl border-t border-t-greenDark">
              {/* Dropdown for "Par Mums" */}
              <div className="flex flex-col">
                <button
                  className="flex justify-center items-center hover:text-greenDark transition"
                  onClick={() => toggleDropdown("par-mums")}
                >
                  <span>Par Mums</span>
                  <img
                    src={icon}
                    alt="arrow"
                    className={`w-6 h-6 transform transition-all duration-300 ${
                      openDropdown === "par-mums" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`${
                    openDropdown === "par-mums" ? "opacity-100 mt-2" : "opacity-0"
                  } overflow-hidden bg-green-50 border-2 border-greenLight rounded-xl px-2 transition-all duration-500`}
                >
                  {openDropdown === "par-mums" && (
                    <>
                      <Link to="/contact" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Kontakti
                      </Link>
                      <Link to="/kolektīvs" className="block hover:text-greenDark transition  border-b-2 border-b-greenDark-100 py-2">
                        Kolektīvs
                      </Link>
                      <Link to="/vesture" className="block hover:text-greenDark transition py-2">
                        Tradīcijas, Vēsture, Simboli
                      </Link>
                    </>
                  )}
                </div>
              </div>
          
              {/* Dropdown for "Izglītība" */}
              <div className="flex flex-col">
                <button
                  className="flex justify-center items-center hover:text-greenDark transition"
                  onClick={() => toggleDropdown("izglitiba")}
                >
                  <span>Izglītība</span>
                  <img
                    src={icon}
                    alt="arrow"
                    className={`w-6 h-6 transform transition-all duration-300 ${
                      openDropdown === "izglitiba" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`${
                    openDropdown === "izglitiba" ? "opacity-100 mt-2" : "opacity-0"
                  } overflow-hidden bg-green-50 border-2 border-greenLight rounded-xl px-2 transition-all duration-500`}
                >
                  {openDropdown === "izglitiba" && (
                    <>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Formālā izglītība
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Karjeras izglītība
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Interešu izglītība
                      </Link>
                    </>
                  )}
                </div>
              </div>
          
              {/* Dropdown for "Pakalpojumi" */}
              <div className="flex flex-col">
                <button
                  className="flex justify-center items-center hover:text-greenDark transition"
                  onClick={() => toggleDropdown("pakalpojumi")}
                >
                  <span>Pakalpojumi</span>
                  <img
                    src={icon}
                    alt="arrow"
                    className={`w-6 h-6 transform transition-all duration-300 ${
                      openDropdown === "pakalpojumi" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`${
                    openDropdown === "pakalpojumi" ? "opacity-100  mt-2" : "opacity-0"
                  } overflow-hidden bg-green-50 border-2 border-greenLight rounded-xl px-2 transition-all duration-500`}
                >
                  {openDropdown === "pakalpojumi" && (
                    <>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Dienesta Viesnīca
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Sporta Komplekss
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition border-b-2 border-b-greenDark-100 py-2">
                        Telpu Noma
                      </Link>
                    </>
                  )}
                </div>
              </div>
          
              {/* Standalone Links */}
              <Link to="/news" className="hover:text-greenDark transition">
                Aktualitātes
              </Link>
              <Link to="/" className="hover:text-greenDark transition">
                Skolēniem
              </Link>
              <Link to="/" className="hover:text-greenDark transition">
                Vecākiem
              </Link>
              <Link to="/admission" className="hover:text-greenDark transition">
                Uzņemšana
              </Link>
              <Link to="/library" className="hover:text-greenDark transition">
                Bibliotēka
              </Link>
            </div>
          
            {/* Additional information block below the menu */}
            <div className="px-4 text-center pb-4">
              <p className="text-gray-600 text-sm">Papildu informācija var būt šeit.</p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}