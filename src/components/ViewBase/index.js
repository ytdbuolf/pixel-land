import React, { useState } from "react";
import "./view-base.scss";
import Header from "../Header";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Drawer from "../Drawer";
import MobileDrawer from "../Drawer/mobile-drawer";

const useStyles = makeStyles({
    drawer: {
        "@media (min-width: 960px)": {
            width: 240,
            flexShrink: 0,
        }
    },
    content: {
        transition: 'margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        backgroundColor: '#e8e8e8',
        marginLeft: 240,
        marginTop: 80
    },
    contentShift: {
        transition: 'margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        marginLeft: 50,
    },
    contentMobile: {
        transition: 'margin 969ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        marginLeft: 0,
    },
});

function ViewBase({ children }) {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(true);
    const isSmallerScreen = useMediaQuery("(max-width: 960px)");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className="view-base-root">
            <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <div className={classes.drawer}>
                {!isSmallerScreen && <Drawer mobileOpen={mobileOpen} />}
                {isSmallerScreen && <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isSmallerScreen={isSmallerScreen} />}
            </div>
            <div className={`${classes.content} ${!mobileOpen && classes.contentShift} ${isSmallerScreen && classes.contentMobile}`}>
                {children}
            </div>
        </div>
    );
}

export default ViewBase;
