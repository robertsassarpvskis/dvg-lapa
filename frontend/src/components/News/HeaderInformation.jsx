import React from 'react';
import Breadcrumb from '../BreadCrumb';
import Image from "/src/assets/images/dya7.jpg";

const InfoHeader = ({ title, subtitle, category, text, imageUrl }) => {
    return (
        
        <div className="news-header ">
            <Breadcrumb />
                <div className="container mx-auto text-center px-4 py-16">
                
                    <div className="py-32 md:py-24 lg:py-20 sm:mb-4 md:mb-12">
                        <h2 className="text-base md:text-2xl lg:text-3xl text-greenDark">
                            {subtitle}
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-black/85 mb-3 md:mb-3">
                            {title} <span className="text-blueDark">{category}</span>
                        </h1>
                    </div>
                
                    
                </div>
        </div>
    );
};

export default InfoHeader;