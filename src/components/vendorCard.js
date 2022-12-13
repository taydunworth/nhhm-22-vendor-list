import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

const vendors = [
    { name: "Vendor Name",
      id: 1,
      description: "Vendor Description",
      website: "www.",
      social: {
        facebook: "www.",
        instagram: "www",
        tiktok: "www",
      },
    },
]

const cardStyle = {
    backgroundColor: "#f1f1f1",
    padding: 30,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    borderRadius: 6,
    width: "20%"

  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }

  const btnStyle = {
    padding: 5,
    backgroundColor: "#000",
    color: "#fff",
    textDecoration: "none",
    borderRadius:6,
  }

  const socialList = {
    display: "block",
    paddingTop: 30,
  }

const VendorCard = () => {
  return (
    <section id="vendor-list">
        {vendors.map(vendor => (
          <div style={cardStyle} key={vendor.id}>
            <h2 class="card-title">{vendor.name}</h2>
            <p class="card-text">{vendor.description}</p>
            <a href={vendor.website} style={btnStyle}>Website link</a>
            <div style={socialList}>
                <a href={vendor.social.facebook} class="card-link"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href={vendor.social.instagram} class="card-link"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href={vendor.social.tiktok} class="card-link"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </div>
        ))}
    </section>
  )
}

export default VendorCard;
