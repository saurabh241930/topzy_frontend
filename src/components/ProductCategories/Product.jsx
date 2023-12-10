import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Image } from 'semantic-ui-react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export default function Product({ image, text }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'center',

                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                },
            }}
        >
            <Card elevation={2} sx={{ alignSelf: 'center' }}>
                <CardContent sx={{ paddingY: 2 }}> {/* Adjust paddingY as needed */}
                    <Image
                        draggable={false}
                        src={image}
                        style={{
                            display: 'inline',
                        }}
                    />
                    <Typography variant="h6" gutterBottom>
                        {text}
                    </Typography>
                    <Button variant="outlined">View Products</Button>
                </CardContent>
            </Card>
        </Box>
    );
}
