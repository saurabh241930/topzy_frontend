import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import NewsCard from './NewsCard';

const newsData = [
    {
        image: 'https://cdn.britannica.com/53/132053-050-F79AAF83/steel-ladle-furnace.jpg',
        title: 'European PET Makers Struggle With High Production Costs',
        content: 'European PET manufacturers face challenges from cheaper imports due to high production costs. To stay competitive, they must innovate, integrate technology for efficiency, and collaborate on sustainability, navigating a path of resilience and strategic agility.',
    },
    {
        image: 'https://www.metalsupermarkets.com/wp-content/uploads/2023/03/rolls-galvanized-steel-sheet.webp',
        title: 'Indian Pig Iron Market Fluctuates As Demand Remains Moderate',
        content: 'In December 2023, the Indian Pig Iron market experienced fluctuations due to moderate demand. Prices in Durgapur, Raipur, Ludhiana, and Delhi see marginal changes. Despite volatility in the mid-sized Steel market, current offers for Pig Iron show slight adjustments.',
    },
    {
        image: 'https://kimsen.vn/upload_images/images/steel-and-aluminum-two-great-metal-roofing-materials-banner.jpg',
        title: 'Indian Domestic ERW Pipe Prices Hit Three-Month Low',
        content: 'The Indian Steel Pipe market displays volatility, with ERW Pipe prices which led to increase much extent by the dropping by Rs. 500-1,000/ton in regions. DI Pipe faces supply challenges despite robust demand from private and government projects, highlighting industry dynamics'
    },

];

export default function NewsGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom style={{ padding: '2%' }}>
                Market News
            </Typography>
            <Grid container spacing={2}>
                {newsData.map((news, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <NewsCard {...news} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
