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
    <div className="bg-greenLight pt-4 md:pt-6 sm:pt-4">
      <div className="container mx-auto px-2">
        <div className="bg-white border border-greenDark py-4 shadow-lg ps-6 pe-8 rounded-2xl sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/"> {/* <-- Use Link instead of <a> */}
                <img
                  src={Logo}
                  alt="Logo"
                  className="cursor-pointer w-28 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* Menu Button (Centered on Mobile) */}
            <div className="lg:hidden flex justify-end flex-1">
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
                  { label: "Kontakti", href: "/contact" },
                  { label: "Kolektīvs", href: "/education#career" },
                  { label: "Tradīcijas, Vēsture, Simboli", href: "/education#interests" },
                ]}
              />
              <Link to="/projects" className="hover:text-green-700 transition">
                Skolēniem
              </Link>
              <Link to="/projects" className="hover:text-green-700 transition">
                Vecākiem
              </Link>
              <Link to="/admission" className="hover:text-greenDark transition">
                Uzņemšana
              </Link>
              <Dropdown
                title="Izglītība"
                links={[
                  { label: "Formālā izglītība", href: "/education#formal" },
                  { label: "Karjeras izglītība", href: "/education#career" },
                  { label: "Interešu izglītība", href: "/education#interests" },
                ]}
              />
              <Dropdown
                title="Pakalpojumi"
                links={[
                  { label: "Dienesta Viesnīca", href: "/" },
                  { label: "Sporta Komplekss", href: "/" },
                  { label: "Telpu Noma", href: "/" },
                ]}
              />
              <Link to="/library" className="hover:text-green-700 transition">
                Bibliotēka
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Attached to Nav Bar) */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-md rounded-b-2xl mt-6">
              <div className="flex flex-col text-gray-700 font-medium gap-4 px-4 text-center text-lg py-4">
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
                  {openDropdown === "par-mums" && (
                    <div className="pl-4">
                      <Link to="/contact" className="block hover:text-greenDark transition">
                        Kontakti
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Kolektīvs
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Tradīcijas, Vēsture, Simboli
                      </Link>
                    </div>
                  )}
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
                  {openDropdown === "izglitiba" && (
                    <div className="pl-4">
                      <Link to="/" className="block hover:text-greenDark transition">
                        Formālā izglītība
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Karjeras izglītība
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Interešu izglītība
                      </Link>
                    </div>
                  )}
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
                  {openDropdown === "pakalpojumi" && (
                    <div className="pl-4">
                      <Link to="/" className="block hover:text-greenDark transition">
                        Dienesta Viesnīca
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Sporta Komplekss
                      </Link>
                      <Link to="/" className="block hover:text-greenDark transition">
                        Telpu Noma
                      </Link>
                    </div>
                  )}
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