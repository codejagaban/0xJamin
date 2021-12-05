import React from "react";
import { Link } from "gatsby";

interface ButtonProps {
  linkTo: string;
  content?: string;
  type?: string
}

export default function Button({
  linkTo,
  content,
  type,
}: ButtonProps): JSX.Element {
  if (type === "mail") {
    return (
      <a href={linkTo} className="btn aniBottom">
        <div className="btn__content">
          {" "}
          {content}
          <div className="bounce">
            <svg
              width="20"
              height="22"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
              className=" bow-arrow"
            >
              <path
                fill="none"
                stroke=""
                strokeWidth="5"
                strokeMiterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8
                                9.8"
              ></path>
            </svg>
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <Link to={linkTo} className="btn aniBottom">
        <div className="btn__content">
          {" "}
          {content}
          <div className="bounce">
            <svg
              width="20"
              height="22"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
              className=" bow-arrow"
            >
              <path
                fill="none"
                stroke=""
                strokeWidth="5"
                strokeMiterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8
                                9.8"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    );
  }
}
