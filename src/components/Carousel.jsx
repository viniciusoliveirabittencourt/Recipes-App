import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { GrNext, GrPrevious } from 'react-icons/gr';
import '../styles/carousel.css';

export default function Carousel({ children }) {
  const carouselRef = useRef(null);

  const handleScrollLeft = (e) => {
    e.preventDefault();
    carouselRef.current.scrollLeft -= 350;
  };

  function handleScrollRight(e) {
    e.preventDefault();
    carouselRef.current.scrollLeft += 350;
  }

  return (
    <section>
      <div className="carousel" ref={ carouselRef }>
        {children}
      </div>
      <div className="container-buttons-carousel">
        <button
          type="button"
          className="button-carousel"
          onClick={ (e) => { handleScrollLeft(e); } }
        >
          <GrPrevious />

        </button>
        <button
          type="button"
          className="button-carousel"
          onClick={ (e) => { handleScrollRight(e); } }
        >
          <GrNext />
        </button>
      </div>
    </section>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
