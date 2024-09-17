import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectSlide.css';
import { Autoplay } from 'swiper/modules';

const ProjectSlide = () => {
    const slides = [
        { id: 1, name: 'Times Now', info: `I contributed to optimizing Times Now's website by integrating AMP to improve page load speeds and leveraging Schema Markup for enhanced SEO. My work included integrating video players, refining ad placements, and resolving production bugs to maintain seamless content delivery. I also developed a dynamic author listing API, which boosted site performance. The project achieved a 30% reduction in load times, a 15% boost in organic traffic, and improved user engagement across devices. Key technologies used were HTML, CSS, JavaScript, React, AMP, and Slike Player.`, img: '/Images/TimesNowLogo.png', bgImage: '/Images/TNN-bgImage.png', href: "https://www.timesnownews.com/" },
        { id: 2, name: 'Times Shopping guide', info: 'At Times Shopping Guide, I led the optimization and development efforts to enhance user experience and platform performance. Key improvements included the integration of Schema Markup for better SEO, advanced search and filtering features, and optimized page load times. I also implemented dynamic product displays and refined user interaction elements, significantly boosting usability and engagement. These enhancements resulted in a more intuitive shopping experience and increased user satisfaction. Technologies used included HTML, CSS, JavaScript, React, and Schema Markup.', img: '/Images/TimesShoppingGuideLogo.png', bgImage: '/Images/TSG-bgImage.png', href: 'https://www.timesshoppingguide.com/' },
        { id: 3, name: 'MarketPlace', info: 'In the Ebos | Marketplace project, I designed and implemented a robust administration interface for a product shopping website. Key functionalities included an intuitive image zoom feature on hover, which enhanced product visibility, and dynamic dashboard graphs that provided real-time analytics on sales and user engagement. The panel facilitated efficient product management, streamlined user moderation, and generated comprehensive reports. My contributions focused on optimizing user experience and operational efficiency. Technologies used encompassed HTML, CSS, JavaScript, React.', img: '/Images/marketplaceLogo.png', bgImage: '/Images/Marketplace-bgImage.png', href: "https://marketplace.fermion.in/" },
        { id: 4, name: 'Uppercase', info: 'I worked on the frontend of the Uppercase project, focusing on the Data layer, integrating Wishlist functionality, handling Review and Rating systems, and managing Orders Integration. These features improved user experience and data flow. Technologies used include React, JavaScript, and API Integration.', img: '/Images/UppercaseLogo.png', href:"https://uppercase.co.in/"},
        { id: 5, name: 'Aza', info: 'I improved Aza’s e-commerce Admin Panel by integrating APIs, implementing pagination for data management, and enabling frontend data export to Excel. I also optimized React Routing for seamless navigation and resolved bugs to enhance performance. Key technologies used include React, JavaScript, API Integration', img: '/Images/AZA-logo.jpg', bgImage: '/Images/AZA-bgImage.png', href:"https://devbridge.azaonline.in/" },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (swiper) => {
        if (swiperInstance) swiperInstance.autoplay.stop(); // Stop autoplay on hover
    };

    const handleMouseLeave = () => {
        if (swiperInstance) swiperInstance.autoplay.start(); // Resume autoplay on mouse leave
    };

    return (
        <div className="App">
            <Swiper
                direction={isMobile ? 'vertical' : 'horizontal'}
                spaceBetween={isMobile ? 10 : 45}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={isMobile ? 2 : 3}
                modules={[Autoplay]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="slide-content"

                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flip-card-wrapper">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front"
                                        style={{
                                            backgroundImage: `url(${slide.bgImage})`, // Dynamically set the background image
                                            backgroundSize: 'cover', // Make sure the image covers the entire slide
                                            backgroundPosition: 'center', // Center the background image
                                        }}>
                                        <img src={slide.img} alt={`${slide.name}Logo`} />
                                    </div>
                                    <div className="flip-card-back">
                                        <div>
                                            <p className='about-project'>{slide.info} </p>
                                            <div>
                                                <button className='show-site'><a href={slide.href} target='_blank'>Visite site</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectSlide;
