import { useState } from "react";
import Logo from "/src/assets/images/footer_logo.png";
import Dropdown from "./DropDownButton";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);

  return (
<div className="bg-greenLight pt-4 md:pt-6 sm:pt-4">
  <div className="container mx-auto  px-2">
        <div className="bg-white border border-greenDark py-4 shadow-lg ps-6 pe-8 rounded-2xl sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="cursor-pointer w-28 transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            
            <div className="lg:hidden">
              <button
                className="text-gray-700"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <span className="text-2xl">&#9776;</span>
              </button>
            </div>

            <div
              className={`${
                isMenuOpen ? "hidden" : "hidden"
              } lg:flex items-center gap-8 text-gray-700 font-medium flex-col lg:flex-row lg:ml-auto`}
            >
              <a href="/news" className="hover:text-green-700 transition">
                Aktualitātes
              </a>

              {/* "Par mums" dropdown */}
              <Dropdown title="Par Mums" wide={true}
                  links={[
                    { label: "Kontakti", href: "/contact" },
                    { label: "Kontakti", href: "/contact" },
                    { label: "Kontakti", href: "/contact" },

                    { label: "Kolektīvs", href: "/education#career" },
                    { label: "Tradīcijas, Vēsture, Simboli", href: "/education#interests" },
                  ]}/>
              <a href="/projects" className="hover:text-green-700 transition">
                Skolēniem
              </a>
              <a href="/projects" className="hover:text-green-700 transition">
                Vecākiem
              </a>
              <a href="/admission" className="hover:text-greenDark transition">
                Uzņemšana
              </a>
              {/* "Izglītība" dropdown */}
              <Dropdown title="Izglītība"
                  links={[
                    { label: "Formālā izglītība", href: "/education#formal" },
                    { label: "Karjeras izglītība", href: "/education#career" },
                    { label: "Interešu izglītība", href: "/education#interests" },
                  ]}/>

              

              <Dropdown title="Pakalpojumi"
                  links={[
                    { label: "Dienesta Viesnīca", href: "/" },
                    { label: "Sporta Komplekss", href: "/" },
                    { label: "Telpu Noma", href: "/" },
                  ]}/>
              <a href="/library" className="hover:text-green-700 transition">
                Bibliotēka
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu (additional info under the nav bar when open) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white shadow-md rounded-lg py-4">
            <div className="flex flex-col text-gray-700 font-medium gap-4">
              <a href="/" className="hover:text-greenDark transition">
                Aktualitātes
              </a>
              <a href="/about" className="hover:text-greenDark transition">
                Par mums
              </a>
              <a href="/education" className="hover:text-greenDark transition">
                Izglītība
              </a>
              <a href="/projects" className="hover:text-greenDark transition">
                Projekti
              </a>
              <a href="/library" className="hover:text-greenDark transition">
                Bibliotēka
              </a>
            </div>
            {/* Additional information block below the menu */}
            <div className="mt-4 px-4">
              <p className="text-gray-600 text-sm">Papildu informācija var būt šeit.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
