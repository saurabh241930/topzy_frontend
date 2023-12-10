import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Product from './Product';

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

export default function ProductGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom style={{ padding: "2%" }}>
                Our Products
            </Typography>
            <Grid container spacing={2}>
                {data.map((product, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <Product image={product.image} text={product.text} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
