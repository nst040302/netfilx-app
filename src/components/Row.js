import { useState, useEffect, useRef } from 'react'
import axios from '../axios'
import './Row.css'
import Row_item from './Row_item'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const base_url = "http://image.tmdb.org/t/p/original/"
  const [movies, SetMovies] = useState([])

  const rowPostRef = useRef()

  const handleClick = (value) => {
    let distance = rowPostRef.current.getBoundingClientRect().x
    if (value === 'left') {
      rowPostRef.current.style.transform = `translateX(0px)`
    }
    if (value === 'right') {
      rowPostRef.current.style.transform = `translateX(${distance - 450}px)`
    }
    console.log(distance);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      SetMovies(request.data.results);
    }
    fetchData()
  }, [])

  return (
    <div className="row">
      <h3 className="row__title">
        {title}
        <span className="row__title__moretext">Explore All</span>
        <span><IoIosArrowForward className="row__title__icon" /></span>
      </h3>
      <MdOutlineArrowBackIosNew className="row__post__btn__left" onClick={() => handleClick('left')} />
      <div className="row__post" ref={rowPostRef}>
        {movies.map((movie, index) => (
          <Row_item
            key={index}
            index={index}
            src={`${base_url}${movie.backdrop_path}`}
            adult = {movie.adult}
          />
        ))}
      </div>
      <MdOutlineArrowForwardIos className="row__post__btn__right" onClick={() => handleClick('right')} />
    </div>
  )
}

export default Row