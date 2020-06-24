import React, { Component } from 'react';
import paper from 'paper';
export default class Cursor extends Component {

    componentDidMount() {

        console.log(this.cursorRef);


        // set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor =  this.cursorRef;

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();





    }
    render() {

      
        return (
            <>
                      <div class="cursor   cursor--small"  ref={(cursor) => { this.cursorRef = cursor; }}></div>
      
            </>
        )
    }
}
