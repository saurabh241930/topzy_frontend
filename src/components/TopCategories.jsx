import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function TopCategories() {
    return (
        <>
            <Typography variant="h5" gutterBottom style={{ padding: "2%" }}>
                Top Categories
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fnonferrous.png" sx={{ width: 36, height: 36 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Non Ferrous"
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fstainlesssteel.png" sx={{ width: 36, height: 36 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Stainless Steel"
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fmildsteel.png" sx={{ width: 36, height: 36 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Mild Steel"
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fchemicals.png" sx={{ width: 36, height: 36 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Chemicals"
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/173x60/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fcotton_textile.png" sx={{ width: 36, height: 36 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Textiles"
                    />
                </ListItem>



            </List>
        </>

    );
}
