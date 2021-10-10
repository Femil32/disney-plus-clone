import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpg' alt='Slide 1' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' alt='Slide 2' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-scale.jpg' alt='Slide 3' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-scales.jpg' alt='Slide 4' />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    padding-top: 20px;

    ul li button {
        &::before {
            font-size: 12px;
            color: #999;
        }
    }

    li.slick-active button::before {
        color: #fff;
    }

    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
    .slick- {
        &prev {
            left: -10px;
        }
        &next {
            right: -10px;
        }
    }

    @media (max-width: 425px) {
        .slick-slide {
            height:180px;
         }
         
         .slick-slide img {
            height:180px;
         }
    }
`

const Wrap = styled.div`
    cursor: pointer;
    padding: 0 15px;
    img {
        border: 3px solid transparent;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 250ms;

        &:hover {
            border: 3px solid rgba(249, 249, 249, 0.8);
        }
    }
`
