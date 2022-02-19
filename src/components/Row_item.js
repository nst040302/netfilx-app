import { useState } from 'react'

import { BsFillPlayFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import './Row_item.css';

const Row_item = ({ index, src, adult }) => {
    const [hover, SetHover] = useState(false)
    return (
        <div className="row__item"
            onMouseEnter={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
        >
            {hover ? (
                <div className="row__item__container"
                    style={{
                        left: hover && index * 225 - 50 + index * 3,
                        top: -110,
                    }}
                >
                    <img className="row__item__img" src={src} />
                    <div className="row__item__info">
                        <div className="row__item__icons">
                            <div className="row__item__icon__left">
                                <BsFillPlayFill className="row__item__icon" />
                                <IoIosAdd className="row__item__icon" />
                                <AiOutlineLike className="row__item__icon" />
                                <AiOutlineDislike className="row__item__icon" />
                            </div>
                            <MdOutlineKeyboardArrowDown className="row__item__icon" />
                        </div>

                        <div className="row__item__desc">
                            <h3 className="row__item__desc__watchedTime">98% Match</h3>
                            <h3 className="row__item__desc__ageLimit">{adult === false ? "3+" : "19+"}</h3>
                            <h3 className="row__item__desc__partCount">1 Season</h3>
                            <p className="row__item__desc__videoQuality">HD</p>
                        </div>

                        <div className="row__item__type">
                            <h3>Type of movie</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <img className="row__item__img" src={src} />
            )}
        </div>
    )
}

export default Row_item