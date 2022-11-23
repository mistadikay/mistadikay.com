import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const GalleryComposition = (props) => (
  <Carousel showArrows={true} showThumbs={false}>
    {props.images.map(({ caption, image }) => (
      <div key={caption}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={caption} />
        <p className="legend">{caption}</p>
      </div>
    ))}
  </Carousel>
);

export default GalleryComposition;
