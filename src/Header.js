import React from 'react';
import  './header.css';
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';
import { display } from '@mui/system';

const Header = () => {
const [{user},dispatch] = useDataLayerValue();

    return (
        <div className="header">
          <div className="header__left">
              <SearchIcon />
              <input 
              placeholder="Search for Artist,Songs"
              type="text"
              />
              </div>  
              
          <div className="header__right">
              <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
              <h4>{user?.display_name}</h4>
          </div>
        </div>
    )
}

export default Header
