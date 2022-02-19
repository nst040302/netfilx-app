import Requests from '../requests'
import axios from '../axios'
import { useState, useEffect } from 'react'
import './Banner.css'
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Banner = () => {
  const base_url = "http://image.tmdb.org/t/p/original/"
  const [banner, SetBanner] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchTrending)
      console.log(request.data.results);
      SetBanner(request.data.results[(Math.floor(Math.random() * request.data.results.length - 1))])
      return request
    }

    fetchData()
  }, [])
  return (
    <div className="banner" style={{
      backgroundImage: `url(${base_url}${banner.backdrop_path})`,
    }}>
      <div className="banner__info">
        <h3 className="banner__title">{banner.title}</h3>
        <h4 className="banner__overview">{banner.overview}</h4>
        <div className="banner__btn">
          <div className="banner__btn__left">
            <BsFillPlayFill className="banner__btn__left__icon"/>
            <p className="banner__btn__left__text">Play</p>
          </div>
          <div className="banner__btn__right">
            <AiOutlineInfoCircle className="banner__btn__right__icon"/>
            <p className="banner__btn__right__text">More Info</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner