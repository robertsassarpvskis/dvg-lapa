const GoogleMap = () => {
    return (
        <div className="container mx-auto px-4 ">
             <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.563307200161!2d26.51796417711157!3d55.87024268293916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2952053898b7d%3A0x19c0cf85ee65eff6!2sDaugavpils%20Valsts%20%C4%A3imn%C4%81zija!5e0!3m2!1slv!2slv!4v1738211965813!5m2!1slv!2slv"
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
