import React from "react";
import IconsList from "./IconsList";

function Footer() {
  return (
    <div style={styles.footer}>
      <IconsList />
      <h5>Example@email.com</h5>
      <h5>copyright @ 2020 Name. All rights reserved</h5>
    </div>
  );
}

export default Footer;

const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginTop: "5rem",
  },
};
