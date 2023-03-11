import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel/TabPanel.component'
import Box from '@mui/material/Box';
import TabOne from '../TabOne/TabOne.component';
import { getMinimumPositifInteger, getRandomNumber } from '../../utils/number';
import TabTwo from '../TabTwo/TabTwo.component';
import TabThree from '../TabThree/TabThree.component';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabContainer = () => {
  const [value, setValue] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [isNumberSubmitted, setIsNumberSubmitted] = React.useState(false);
  const [array, setArray] = React.useState([]);
  const [result, setResult] = React.useState(0);
  console.log(number);
  const generateRandomNumber = () => {
    if(!array.length){
      return;
    }
    const tempArray = new Array(number);
    for(let i=0; i<tempArray.length; i++){
      tempArray[i] = getRandomNumber();
    }
    console.log(tempArray);
    setArray(tempArray);
  }

  React.useEffect(()=>{
    const newArray = new Array(number);
    setArray(newArray);
  }, [number])

  React.useEffect(()=>{
    setResult(getMinimumPositifInteger(array))    
  },[array])

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const submitNumber = (number) => {
    setIsNumberSubmitted(true);
    setValue(1);
    setNumber(number);
  }

  return (
    <Box sx={{ width: '100%', padding: '2rem'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab  disabled={isNumberSubmitted} label="Input a Number" {...a11yProps(0)} />
          <Tab label="Generate Random Number" {...a11yProps(1)} />
          <Tab label="Result" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{height: '50vh'}}>
        <TabPanel value={value} index={0}>
          <TabOne onSubmitNumber = {submitNumber}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabTwo array={array} generate={generateRandomNumber}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabThree number={result}/>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default TabContainer;