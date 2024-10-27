// ProductDetails.js
import { useParams } from 'react-router-dom';
import { products, heroList } from '../../Sorce';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"
import { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



function ProductDetails() {
    const swiperRef = useRef(null);

    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id)) || 
                    heroList.find((item) => item.id === parseInt(id));
    
    if (!product) return <div>Product not found</div>;

    return (
        <>      
            <div className="product-details">

                <div className='product__place'>
                    <a href="./Home"><ion-icon name="chevron-back-outline"></ion-icon> Home</a>  <span>/</span> {product.model}<p></p>
                </div>
                {/* <img src={product.image} alt={product.model} /> */}

                <h1>{product.model}</h1>
                


                <div className="detailSlide">
                    <button onClick={() => swiperRef.current.slidePrev()}><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <Swiper 
                        spaceBetween={10} 
                        slidesPerView={1} 
                        loop={true} 
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        // onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}>

                        {product.otherImage && product.otherImage.map((image, index) => (
                            <SwiperSlide className='img__space' key={index}>

                                <img className='details__img' src={image} alt={`Slide ${index + 1}`}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button onClick={() => swiperRef.current.slideNext()}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                </div>
                <div className='price__buy'>
                    <p>{product.price} GEL</p>
                    <button>buy</button>
                </div>

            </div>
        </>
    );
}

export default ProductDetails;
