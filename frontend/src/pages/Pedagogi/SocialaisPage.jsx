import React from 'react';
import NewsHeader from "/src/components/NewsHeader.jsx";
import { pedagogiData } from "/src/data/pedagogi.js"; 
import SocialaisPedagogsPage from "/src/components/Pedagogs.jsx";

const SocialaisPage = () => {
    return (
        <div>
            <NewsHeader Heading={'Sociālais'} HeadingGreen={'Pedagogs'} />
            <SocialaisPedagogsPage data={pedagogiData.socialais} />
        </div>
    );
};

export default SocialaisPage;
