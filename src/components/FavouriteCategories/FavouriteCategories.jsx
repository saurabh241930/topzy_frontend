import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import 'react-multi-carousel/lib/styles.css';
import "./style.css";
import { Typography } from "@mui/material";

const data = [
    {
        image: "https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fmildsteel.png",
        text: "Mild Steel"
    },
    {
        image: "https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fstainlesssteel.png",
        text: "Stainless Steel"
    },
    {
        image: "https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fnonferrous.png",
        text: "Non Ferrous"
    },
    {
        image: "https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fpolymers_packaging.png",
        text: "Chemicals"
    },
    {
        image: "https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Foil_seeds_feed.png",
        text: "Oils"
    },


];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};

const FavouriteCategories = ({ deviceType }) => {
    return (
        <Carousel
            ssr
            partialVisible
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
        >
            {data.slice(0, 5).map((item, index) => (
                <div key={index} className="carousel-item">
                    <Image
                        draggable={false}
                        src={item.image}

                    />
                    <Typography variant="subtitle1" align="center">
                        {item.text}
                    </Typography>
                </div>
            ))}
        </Carousel>
    );
};

export default FavouriteCategories;
