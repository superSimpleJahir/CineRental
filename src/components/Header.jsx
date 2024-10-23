import logo from '../assets/logo.svg'
import ring from '../assets/ring.svg'
import moon from '../assets/icons/moon.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import CardDetails from './CardDetails';
import { useState, useContext } from 'react';
import { MovieContext } from '../context';

function Header() {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cartData } = useContext(MovieContext);


  const handleShowCartModal = () => {
    setShowCartModal(true);
  }

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  }

  return (
    <>
      {
        showCartModal && <CardDetails onCloseModal={handleCloseCartModal} />
      }
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={moon} width="24" height="24" alt="moon" />
              </a>
            </li>
            <li>
              <a onClick={handleShowCartModal} className="bg-primary/20 relative dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={shoppingCart} width="24" height="24" alt="shoppingCart" />

                {
                  cartData.length > 0 && <span className='rounded-full absolute top-[-12px] left-[18px] bg-[#12cf6f] text-white text-center p-[2px] h-[30px] w-[30px]'>{cartData.length}</span>
                }
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header