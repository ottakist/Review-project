import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    if (index < people.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };
  const prevPerson = () => {
    if (index != 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(people.length-1)
    }
  };
  const randomPerson=()=>{
    let randomNumber = Math.floor(Math.random()*(people.length-1))
    if(randomNumber === index){
       randomNumber =index +1
    }
    console.log(randomNumber)
    setIndex(randomNumber)
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=>{prevPerson()}}>
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => {
            nextPerson();
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={()=>randomPerson()}>surprise me</button>
    </article>
  );
};
export default Review;
