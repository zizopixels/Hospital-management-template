import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Doctors from './Doctors'
import Nurses from './Nurses'
import Laboratory from './Laboratory'
import Pharmacy from './Pharmacy'
import Recipients from './Recipients'

import Accountants from './Accountants'
import Security from './Security'
import Swipers from './Swipers'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  
  indicator: {
    backgroundColor: '#71C61D',
    
  },
}));

export default function Staff() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator
          }}
          variant="scrollable"
          aria-label="full width tabs example"
          scrollButtons="auto"
        >
          <Tab style={{color: "#71C61D",}} label="Doctors" {...a11yProps(0)} />
          <Tab style={{color: "#71C61D",}} label="Nurses" {...a11yProps(1)} />
          <Tab style={{color: "#71C61D",}} label="Laboratory" {...a11yProps(2)} />
          <Tab style={{color: "#71C61D",}} label="Pharmacy" {...a11yProps(3)} />

          <Tab style={{color: "#71C61D",}} label="Recipients" {...a11yProps(4)} />
          <Tab style={{color: "#71C61D",}} label="Accountants" {...a11yProps(5)} />
          <Tab style={{color: "#71C61D",}} label="Security Guards " {...a11yProps(6)} />
          <Tab style={{color: "#71C61D",}} label="Swipers" {...a11yProps(7)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <Doctors/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <Nurses/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Laboratory/>
        </TabPanel>
        
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Pharmacy/>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <Recipients/>
        </TabPanel>

        <TabPanel value={value} index={5} dir={theme.direction}>
        <Accountants/>
        </TabPanel>

        <TabPanel value={value} index={6} dir={theme.direction}>
          <Security/>
        </TabPanel>

        <TabPanel value={value} index={7} dir={theme.direction}>
         <Swipers/>
        </TabPanel>


      </SwipeableViews>
    </div>
  );
}
