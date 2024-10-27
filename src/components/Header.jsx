import { useState } from 'react';
import fav from '../assets/icon/Wishlist.png'
import cart from '../assets/icon/cart.png'
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


function Header({setSearchTerm, searchTerm, filteredProducts, clearList} ) {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }


    
    return (
        <div className='main__header'>
            <div className='sale__layer'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="">Shop Now</a></p>
            </div>
            <div className="header">
                <div>
                    <h1 className="logo"> Mobile<span className='logo__part'>shop</span></h1>
                </div>
                <div onClick={open} className="burger">
                    <div className={isOpen ? 'burger-item burger__item__1 active':'burger-item burger__item__1'}></div>
                    <div className={isOpen ? 'burger-item burger__item__2 active':'burger-item burger__item__2'}></div>
                    <div className={isOpen ? 'burger-item burger__item__3 active':'burger-item burger__item__3'}></div>
                </div>
                <div className={isOpen ? 'header__content active': 'header__content'}> 
                    <ul>
                            <li><a href="./Home">Home</a></li>
                            <li><a href="./Shop">Shop</a></li>
                            <li><a href="">Cart</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">About</a></li>
                    </ul>
                    <div className='search__icon'>
                        <div className='form__search'>
                            <form>
                                <input 
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                    {
                                        searchTerm.length > 0 ? 
                                        <ion-icon onClick={clearList} name="close-outline"></ion-icon> : 
                                        <ion-icon name="search-outline"></ion-icon>
                                    }

                            </form>
                        </div>
                        <div className='icons'>
                            <img src={fav} alt="favorite" />
                            <img src={cart} alt="cart" />
                        </div>                   
                    </div>
                    <div className='find__producte__all'>
                        <div className='find__product'>
                            {
                                searchTerm.length > 0 ?                       
                                (<div className='item__flex'>
                                    {
                                        filteredProducts.map((product) => (
                                            <div key={product.id}>
                                                <div className='item'>
                                                    <img src={product.image} alt={product.model} />
                                                    <div>
                                                        <h4>{product.model}</h4>
                                                        <p>{product.price}.00 $</p>
                                                            {
                                                                product.discount ? <p className='discount'>{product.oldPrice}.00 $</p> : " "
                                                            }
                                                        <button className='find__btn__item'>Details</button>
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop__search'>
                {
                                searchTerm.length > 0 ?                       
                                (<div className='item__flex'>
                                    {
                                        filteredProducts.map((product) => (
                                            <div key={product.id}>
                                                <div className='item'>
                                                    <img src={product.image} alt={product.model} />
                                                    <div>
                                                        <h4>{product.model}</h4>
                                                        <p>{product.price}.00 $</p>
                                                            {
                                                                product.discount ? <p className='discount'>{product.oldPrice}.00 $</p> : " "
                                                            }
                                                            <Link onClick={clearList} to={`/${product.id}`}><button className='find__btn__item'>Details</button> </Link>                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>) : ""
                            }
            </div>
        </div>
    )
}
Header.propTypes = {

    setSearchTerm: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    searchTerm: PropTypes.node.isRequired,
    clearList: PropTypes.func.isRequired,

  };
export default Header
