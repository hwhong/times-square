import React from "react";
import PropTypes from "prop-types";
// class HelloWorld extends React.Component {
//   render() {
//     return <>Hello : {this.props.greeting}</>;
//   }
// }

function HelloWorld(props) {
  return <>Woowhee {props.greeting}</>;
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default HelloWorld;
