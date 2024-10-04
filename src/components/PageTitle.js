import React from "react";
import { motion } from "framer-motion";

export default function PageTitle(props) {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`page-title__line ${props.lineUnable ? "inactive" : ""}`}
      ></motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-title__block"
      >
        <h1 className="page__title">{props.PageTitle}</h1>
      </motion.div>
    </>
  );
}
