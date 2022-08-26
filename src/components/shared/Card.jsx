import PropTypes from 'prop-types'
import React from 'react';

function Card({ children, reverse }) {
  //   return (
  //     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  //   )

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}


Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card;
