import * as React from "react";
import VendorCard from "../components/vendorCard";

const pageStyles = {
  color: "#223440",
  padding: "60px",
  width: "calc(80% - 70px)",
  margin: "0 auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  textAlign: "center",
}

const pStyle = {
  textAlign: "center",
  marginBottom: 30,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Nasvhille Handmade Holiday Market 2022 Vendor List</h1>
      <p style={pStyle}>Full directory of vendors from the 2022 Nashville Handmade Holiday Market hosted at Music City Center December 10-11</p>
      <VendorCard />
      <small>Questions? Reach out to <a href="mailto:hello@taydunworth.com">Taylor Dunworth</a> with any questions or comments.</small>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Nashville Handmade Holiday 2022 Vendors</title>
