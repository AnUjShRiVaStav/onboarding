import "./App.css";
import WelcomeScreen from "./component/home";
import Plans from "./component/plans";
import FinalScreen from "./component/finalScreen";
import SetUpHome from "./component/setupHome";
import "antd/dist/antd.less";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Progressbar from "./utility/ProgressBar";
import img from '../src/asset/img.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function App() {
  const [value, setValue] = React.useState(0);
  const [tabValue, setTabValue] = React.useState({ id: 1, progressValue: 10.5});
  const tabValues = [
    { id: 1, progressValue: 10.5 },
    { id: 2, progressValue: 28.5 },
    { id: 3, progressValue: 58.5 },
    { id: 4, progressValue: 75 },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);    
  };

  return (
    <div className="app">
    
    <h1><img src={img} alt='img' />Eden</h1>
      <Box sx={{ width: "100%" }} >
        <Box style={{ display:'flex', justifyContent:'space-between' }}>
        <div style={{ position: "relative", zIndex: 500 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabValues?.map((val,index) =>{
            return(
              <Tab
              label={val.id}
              style={{ borderRadius: "50%", backgroundColor: "rgb(64, 64, 168)", marginRight: "50px", color: "white", }}
              {...val.id}
              onClick={() => setTabValue(val)}
            />
            )
          })}
          </Tabs>
          </div>
        </Box>
        
        <Progressbar bgcolor="rgb(64, 64, 168)" progress={tabValue.progressValue || 25} height={1} />
        <TabPanel value={value} index={0}>
          <WelcomeScreen />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SetUpHome />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Plans />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FinalScreen />
        </TabPanel>
      </Box>
    </div>
  );
}

export default App;
