import * as React from "react";
import VendorCard from "../components/vendorCard";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Nasvhille Handmade Holiday Market 2022 Vendor List</h1>
      <VendorCard />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
