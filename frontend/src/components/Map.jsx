const GoogleMap = ({Link}) => {
    return (
        <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10 ">
             <iframe
            src={Link}
            className="w-full rounded-xl shadow-xl border-2 border-greenLight"
            height="550"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map showing Daugavpils Valsts ģimnāzija location"
        ></iframe>
        </div>
       
    );
}

export default GoogleMap;
