import React, { useState, useEffect } from "react";

import "./header.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

  



const Header = (props) => {

  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const location = useLocation();
  const [slug,setSlug] = useState(null)
  
  useEffect(()=>{
    const url = String(location.pathname).split("/")
    const slug = "/"+url[1]+"/"+url[2];
    setSlug(slug)
    console.log('slug header', slug)
  },[location.key])


  const list = () => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {props.menuItems?.map((item, index) => (
          <ListItem  className="list-item-cont" key={index} disablePadding>
             <Link to={item.url}>
            <ListItemButton >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText  className={slug === item.url ? "mobile-item-active" : "mobile-item"}  primary={item.label} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="container ">
      <div className="row masthead">
        <div className="col-10 col-md-2 no-padding d-flex align-items-center">
          <div className="hamburger-btn">
            <MenuIcon onClick={toggleDrawer('left', true)} color="primary"  />
          </div>
          <Link to="/">
            <img
              className="masthead-image"
              src={props.logo?.url}
              alt="main images"
            />
          </Link>
        </div>
        <div className="col-2 col-md-10  ">
          <div className="media-query-flag">
          <div className="row pt-4 h-100 items-container ">
            {props.menuItems?.map((item, index) => {
              return (
                <div key={index} className={slug === item.url ? "menu-item-active" : "menu-item"}>
                  <Link to={item.url}>{item.label}</Link>
                  {/* <a href={item.url}>
                    <span>{item.label}</span>
                  </a> */}
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      <div className="drawer-container">
      <div>
      {
        <React.Fragment key={'left'}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      }
    </div>
      </div>
    </div>
  );
};

export default Header;
