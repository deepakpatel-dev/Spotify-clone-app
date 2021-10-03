import React from 'react';
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Search } from '@material-ui/icons';
import { useDataLayerValue } from './DataLayer';


const Sidebar = () => {
    const [playlists,dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Search"/>
            <SidebarOption Icon={SearchIcon} title="Home"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sidebar__title">Playlist</strong>
            <hr />
             {playlists?.items?.map((playlist) =>(
                 <SidebarOption title={playlist.name}/>
             ))}
            {/* <SidebarOption title="Hip hop"/>
            <SidebarOption title="Rock"/>
            <SidebarOption title="Sufi"/> */}

        </div>
    )
}


export default Sidebar;