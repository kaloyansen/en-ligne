import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';


const MenuNavContainer = (props) => {
    return (
        <Menu>
            <MenuItem text="moi" render={()=> <Link to={'/'}>moi</Link>}/>
            <MenuItem text="compétance" render={()=> <Link to={'/grid'}>compétance</Link>}/>
            <MenuItem text="formation" render={()=> <Link to={'/chart'}>formation</Link>}/>
            <MenuItem text="experience" render={()=> <Link to={'/forms'}>expérience</Link>}/>
        </Menu>
    );
}

export default MenuNavContainer;