import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

const propTypes = {
  linkTo: PropTypes.string,
};

const Button = ({ linkTo, content, type }) => {
  if(type === "mail") {
    return (
      <a href={linkTo} className="btn aniBottom">
        <div className="btn__content"> { content}
          <div className="bounce">
            <svg width="20"
                 height="22"
                 viewBox="0 0 72 22"
                 xmlns="http://www.w3.org/2000/svg"
                 className=" bow-arrow">
              <path fill="none"
                    stroke=""
                    stroke-width="5"
                    stroke-miterlimit="0"
                    d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8
                                9.8">

              </path>
            </svg>
          </div>
        </div>
      </a>
    )
  }else  {
    return (
      <Link to={linkTo} className="btn info">
        <div className="btn__content"> { content}
          <div className="bounce">
            <svg width="20"
                 height="22"
                 viewBox="0 0 72 22"
                 xmlns="http://www.w3.org/2000/svg"
                 className=" bow-arrow">
              <path fill="none"
                    stroke=""
                    stroke-width="5"
                    stroke-miterlimit="0"
                    d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8
                                9.8">

              </path>
            </svg>
          </div>
        </div>
      </Link>
    )
  }
}

export default Button