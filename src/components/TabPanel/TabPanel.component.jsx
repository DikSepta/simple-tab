import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TabPanel = ({children, value, index, ...other}) => {
  return (
    <div
      role="tabpanel"
      style={{maxHeight: '100%', overflow: 'auto'}}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;