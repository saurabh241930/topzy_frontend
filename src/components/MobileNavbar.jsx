import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArchiveIcon from '@mui/icons-material/Archive';

import { Paper } from '@mui/material';

export default function MobileNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Prices" icon={<RestoreIcon />} />
          <BottomNavigationAction label="News" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Products" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Tracking" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>

    </Box>
  );
}