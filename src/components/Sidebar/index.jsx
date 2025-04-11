import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";

export const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="box">
                <h3 className="mb-3 text-[16px] font-[600]">Shop By Categories</h3>
                <div className = "scroll px-3 relative -left-[10px]">
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Skin Care" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Fitness" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Herbal" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Ayurvedic" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;