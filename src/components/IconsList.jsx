import React from "react";
import {
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
function IconsList() {
  return (
    <div style={styles.iconsStyles}>
      <div style={styles.iconBorderStyles}>
        <SlSocialGoogle size={20} />
      </div>
      <div style={styles.iconBorderStyles}>
        <SlSocialFacebook size={20} />
      </div>
      <div style={styles.iconBorderStyles}>
        <SlSocialLinkedin size={20} />
      </div>
      <div style={styles.iconBorderStyles}>
        <SlSocialTwitter size={20} />
      </div>
    </div>
  );
}

export default IconsList;

const styles = {
  iconsStyles: {
    display: "flex",
    justifyContent: "space-around",
    gap: "2rem",
  },
  iconBorderStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    border: "2px solid #000",
  },
};
