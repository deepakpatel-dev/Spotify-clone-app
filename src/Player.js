import React from 'react';
import './Player.css'
import Sidebar from './Sidebar.js'
import Body from './Body.js'
import Footer from './Footer.js'

const Player = ({spotify}) => {
    return (
        <div className="player">
           <div className="player_body">
               <Sidebar />
               <Body soptify={spotify}/>
               <Footer/>
               </div> 
        </div>
    )
}

export default Player


