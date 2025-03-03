import { Link, useLocation } from "react-router-dom";
import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="container mx-auto">
            <nav className=" text-gray-600 text-md ps-8 pt-10">
                <ul className="flex space-x-2">
                    <li>
                        <Link to="/" className="text-greenDark transition duration-300 ease-in-out hover:underline hover:font-medium">Sākums</Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={name} className="flex items-center">
                                <span className="mx-2"><img src={IconRG} alt="" /></span>
                                {!isLast ? (
                                    <Link to={routeTo} className="text-greenDark hover:underline capitalize">
                                        {decodeURIComponent(name)}
                                    </Link>
                                ) : (
                                    <span className="text-gray-700 capitalize">{decodeURIComponent(name)}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumb;
