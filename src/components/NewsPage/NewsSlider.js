import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewItem from "./NewItem";

export default function NewsSlider() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <svg
          width="22"
          height="38"
          viewBox="0 0 22 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7678 20.7678C21.7441 19.7915 21.7441 18.2085 20.7678 17.2322L4.85787 1.32233C3.88156 0.346019 2.29864 0.346018 1.32233 1.32233C0.346021 2.29864 0.346021 3.88155 1.32233 4.85786L15.4645 19L1.32233 33.1421C0.346018 34.1184 0.346018 35.7014 1.32233 36.6777C2.29864 37.654 3.88155 37.654 4.85786 36.6777L20.7678 20.7678ZM18 21.5L19 21.5L19 16.5L18 16.5L18 21.5Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <svg
          width="22"
          height="38"
          viewBox="0 0 22 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.23223 20.7678C0.255922 19.7915 0.255922 18.2085 1.23223 17.2322L17.1421 1.32233C18.1184 0.346019 19.7014 0.346018 20.6777 1.32233C21.654 2.29864 21.654 3.88155 20.6777 4.85786L6.53553 19L20.6777 33.1421C21.654 34.1184 21.654 35.7014 20.6777 36.6777C19.7014 37.654 18.1184 37.654 17.1421 36.6777L1.23223 20.7678ZM4 21.5L3 21.5L3 16.5L4 16.5L4 21.5Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1890,
        settings: {
          arrows: false,
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="new__container">
      <Slider {...settings}>
        <NewItem
          newImg="/img/News/new-1.jpg"
          newTxt="Современные оболочки зданий, как и сами здания с каждым новым объектам становятся сложнее, архитекторы часто используют бионические пространственные формы в которых нет прямых граней."
          newHref="https://drive.google.com/file/d/1nJ_o0qaTCUEu0iEbkNbp6vCrJnMu-a48/preview"
        />
        <NewItem
          newImg="/img/News/new-2.png"
          newTxt="Здания и сооружения со светопрозрачными фасадами и кровлями."
          newHref="https://drive.google.com/file/d/1ZfY38kyPmXEjLgrvX7ZbA-AELK34UjgQ/preview"
        />
        <NewItem
          newImg="/img/News/new-3.png"
          newTxt="Виды и подтипы установки систем."
          newHref="https://drive.google.com/file/d/12J5feIJrhW_RZ2-0vyBni4ZYNKO4D0va/preview"
        />
        <NewItem
          newImg="/img/News/new-4.png"
          newTxt="Обзор всех систем фасадов Schueco."
          newHref="https://drive.google.com/file/d/1GFSl9KiX31aP1Ry01Rg4MB_DhwlHmowx/preview"
        />
      </Slider>
    </div>
  );
}
