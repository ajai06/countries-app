import React from "react";

function Country({ country }) {
  return (
    <div style={styles.countryContainer}>
      <div className="row">
        <div className="col-5">
          <img style={styles.flagStyles} src={country.flag} alt="" />
        </div>
        <div className="col-7">
          <h4>{country.name}</h4>
          <h5>{country.region}</h5>
        </div>
      </div>
    </div>
  );
}

export default Country;

const styles = {
  countryContainer: {
    border: "2px solid black",
    padding: "24px",
    marginBottom: "1rem",
    height: "150px",
    display: "grid",
    alignItems: "center",
  },
  flagStyles: {
    height: "67px",
    width: "100px",
    border: "1px solid",
  },
};
