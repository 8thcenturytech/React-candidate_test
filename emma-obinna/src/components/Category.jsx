import React, { useEffect, useRef } from 'react';


const HorizontalScrollSection = ({ categories }) => {
  const scrollContainerRef = React.useRef(null);
  const scrollIntervalRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

   // Start automatic scrolling when the component mounts
   useEffect(() => {
    const startScrolling = () => {
      if (scrollContainerRef.current) {
        scrollIntervalRef.current = setInterval(() => {
          scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }, 2000);
      }
    };

    startScrolling();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);


  const handleScrollButtonClick = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  return (
    <div className="container">
        <div className='scroll-top'>
            <h4>Featured Categories</h4>
            <div>
            <button className="btn btn-primary scroll-button" onClick={() => { handleScrollButtonClick(); scrollLeft(); }}> 
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-primary scroll-button" onClick={() => { handleScrollButtonClick(); scrollRight(); }}> 
            <i className="bi bi-chevron-right"></i>
          </button>
            </div>
        </div>
      <div className="scroll-container-wrapper d-flex align-items-center">
     
        <div className="scroll-container" ref={scrollContainerRef}>
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <h4>{category.title}</h4>
              <p>{category.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
