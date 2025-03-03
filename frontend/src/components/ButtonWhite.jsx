import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const ButtonWhite = ({Link}) => {
    return ( 
        <a href={Link} class="flex items-center justify-center bg-greenDark text-center w-52 rounded-2xl h-16 relative text-white text-xl font-semibold group cursor-pointer" type="button">
            <div class="bg-whiteGray rounded-xl h-14 w-3/12 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[199px] z-10 duration-500">
                <img src={IconRG} alt="Par Mums" className="w-6 transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            </div>
            <p class="translate-x-2 mb-1 ml-4">Visas Ziņas</p>
        </a>
     );
}
 
export default ButtonWhite;