import { useState, useEffect } from 'react'
import Logo from '../img/Logo.png'
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import './Header.css'
const Header = () => {
    const [header, setHeader] = useState("transparent")

    const listenScrollEvent = (event) => {
        if (window.scrollY > 50) {
            return setHeader("rgb(20, 20, 20)")
        } else {
            return setHeader("transparent")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="header" style={{
            background: header
        }}>
            <div className="header__Left">
                <img className="header__Left__Logo" src={Logo} />
                <ul className="header__Left__List">
                    <li className="header__Left__Item active"><a>Home</a></li>
                    <li className="header__Left__Item"><a>TV Shows</a></li>
                    <li className="header__Left__Item"><a>Movies</a></li>
                    <li className="header__Left__Item"><a>New & Popular</a></li>
                    <li className="header__Left__Item"><a>My List</a></li>
                </ul>
            </div>
            <div className="header__Right">
                <FiSearch className="header__Right__Icon marginLR6px cursorPointer" />
                <a className="header__Right_Kids marginLR6px cursorPointer">Kids</a>
                <IoMdNotificationsOutline className="header__Right__Icon marginLR6px cursorPointer" />
                <div className="header__Right__Account marginLR6px" style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img className="cursorPointer" src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXrmj4H9RUyDiO28L-KJxDGc9oDijd4jnl5RyCkiWMPB6xFxiVdRiKdOcNjG8kn4A3idJRTGAzuBuQ__c6yl1m0.png?r=fcc" />
                    < IoMdArrowDropdown className="header__Right__Icon cursorPointer" />
                </div>
            </div>
        </div>
    )
}

export default Header