import React from "react";
import PropTypes from "prop-types";
import styles from "../../assets/stylesheets/hello-world.module.css";

function HelloWorld(props) {
  return <div className={styles.root}>Woowhee {props.greeting}</div>;
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default HelloWorld;
