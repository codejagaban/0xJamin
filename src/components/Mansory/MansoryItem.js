
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "gatsby";

const propTypes = {
  item: PropTypes.object,
};

const MansoryItem = ({ item  }) => {
  const arrayRandomItem = (array) => {
    return  array[Math.floor(Math.random() * array.length | 0)]
  }


  return (

        <>
          <ItemStyle
            {...{ item }}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: arrayRandomItem(['350px', '270px', '310px']),
            }}
            role="gridcell"
            id="cardHover"
            aria-label={`${item.title} ${item.description}`}
            className={"aniBottom"}

          >
            {/*Image here*/}

            <img src={item.imageUrl} alt={item.title}/>

            <div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.technologies && (
                <p className="d-flex flex-wrap">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech">
                      {tech}
                    </span>
                  ))}
                </p>
              )}

            </div>


          </ItemStyle>
        </>
  )}

const ItemStyle = styled.a`
  margin: 0 0 1.5em;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: var(--button-index);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    transition: 1s ease-in-out;
  }
  &:before {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
 
  }
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
   
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    /* background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.76) 100%
    ); */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 10%,
      rgb(0 0 0 / 78%) 80%
    );
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    img {
    transform: scale(1.03);
    }
    div {
      z-index: 999;
      transform: none;
      opacity: 1;
    }
  }
  h3 {
    color: #fff;
    font-size: var(--font-x-md);
    font-weight: 800;
  }
  p {
    color: #d5d5d5 !important;
    font-size: 1.4rem;
    span {
      background: #fff;
      padding: 4px 10px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: 1.1rem;
      margin-right: 6px;
      color: #1A2323;
      font-weight: 700;
    }
  }
  div {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
    /* &:hover {
            transform: none;
            opacity: 1;
        } */
  }
  @media (max-width: 585px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 1 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 989px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 1 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 220px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
`;

MansoryItem.propTypes = propTypes;

export default MansoryItem;