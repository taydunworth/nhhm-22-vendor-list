import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

  const cardStyle = {
      backgroundColor: "#F2F4F5",
      padding: 30,
      fontFamily: "-apple-system, Roboto, sans-serif, serif",
      borderRadius: 6,
      width: "90%",
      marginBottom: 30,
      color: "#223440",
  }

  const btnStyle = {
      padding: "10px 20px",
      backgroundColor: "#274253",
      color: "#fff",
      textDecoration: "none",
      borderRadius:6,
      margin: "5px 0",
      display: "inline-block",
  }

  const socialList = {
      display: "block",
      paddingTop: 10,
  }

  const fontAwesome = {
      fontSize: "1.5em",
      paddingRight: "20px",
      color: "#3F8C8C",
  }

const VendorCard = ({vendor}) => {
  return (
    <div style={cardStyle} key={vendor.id}>
      <h2>{vendor.name}</h2>
      <p>{vendor.description}</p>
      { !!vendor.website ? <a href={vendor.website} target="_blank" style={btnStyle}>Website</a> : null }
      <div style={socialList}>
          { !!vendor.facebook ? <a href={vendor.facebook} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faFacebook} /></a> : null }
          { !!vendor.instagram ? <a href={vendor.instagram} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faInstagram} /></a> : null }
          { !!vendor.tiktok ? <a href={vendor.tiktok} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faTiktok} /></a> : null }
      </div>
    </div>
  )
}

export default VendorCard;
