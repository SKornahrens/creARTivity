import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Canvas = (props) => {

  return (
    <div className="canvasDiv my-3">

      <canvas className="canvas" width={500} height={500}></canvas>


        <div className="row">
        <div className= "col-s-12 col-m-3 mx-auto mt-1 ">
        <Link to="/select">
          <Button  color="primary" size="lg"><i className="fa fa-arrow-left text-white"></i>  Go Back</Button>
        </Link>
        </div>
        <div className= "col-s-12 col-m-3 mx-auto mt-1 ">
        <Link to="/preview">
          <Button  color="primary"  size="lg">  Cre<span className="createorlog5">ART    </span>    <i className="fa fa-arrow-right text-white"></i></Button>
        </Link>
        </div>
        </div>

    </div>

  );
};

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}

export default Canvas;
