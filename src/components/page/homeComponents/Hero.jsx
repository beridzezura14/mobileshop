import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"
import { useRef } from 'react';
import { heroList } from '../../../Sorce';

import { Link } from 'react-router-dom';



function Hero() {
    const swiperRef = useRef(null);
    return (
        <div className='main__hero'>
            <Swiper className='hero'
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >

                        {
                            heroList.map( item => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <div className='items'>
                                            <div className="hero__text">
                                                <h1>{item.model}</h1>
                                                <p>{item.para}</p>
                                                <Link to={`/${item.id}`}> <button> <p>Learn More <ion-icon name="chevron-forward-outline"></ion-icon></p> </button> </Link>
                                                
                                            </div>
                                            <img className='img' src={item.image} alt={item.model} />
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    <div>
                        <div className='arr'>
                            <button onClick={() => swiperRef.current.slidePrev()}><ion-icon name="chevron-back-outline"></ion-icon></button>
                            <button onClick={() => swiperRef.current.slideNext()}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                        </div>
                    </div>

            </Swiper>
        </div>

    )
}

export default Hero
