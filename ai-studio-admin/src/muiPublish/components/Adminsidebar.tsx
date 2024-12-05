import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as StartOff } from "~assets/images/svg/icon-star-off.svg";
import { ReactComponent as StartOn } from "~assets/images/svg/icon-star-on.svg";

import "./Adminsidebar.scss";

const Adminsidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="sidebar-tab">
                <div className="menu-toggle">
                    즐겨찾기
                    <Arrow width={7} height={4} fill={"#666666"} />
                </div>
                <List
                    className="menu-bookmark"
                    sx={{ width: "100%", maxWidth: 360 }}
                    component="nav"
                    aria-labelledby=""
                >
                    <ListItemButton className={""}>
                        <ListItemText primary="1Depth Menu" />
                        <StartOn fill="#FFBB00" />
                    </ListItemButton>
                    <ListItemButton className={""}>
                        <ListItemText primary="2Depth Menu" />
                        <StartOn fill="#FFBB00" />
                    </ListItemButton>
                    <ListItemButton className={""}>
                        <ListItemText primary="3Depth Menu" />
                        <StartOn fill="#FFBB00" />
                    </ListItemButton>
                </List>
            </div>
            <nav className="sidebar-nav">
                <div className="menu-toggle">
                    menu <Arrow width={7} height={4} fill={"#666666"} />
                </div>
                <List
                    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="side-menu"
                    // subheader={
                    //     <ListSubheader component="div" id="side-menu">
                    //         menu
                    //     </ListSubheader>
                    // }
                >
                    <ListItemButton className={"MuiList-active"}>
                        <ListItemText primary="1Depth Menu" />
                        <ListItemIcon>
                            <Arrow width={7} height={4} fill={"#0046ff"} />
                        </ListItemIcon>
                    </ListItemButton>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub MuiList-sub-active"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <Arrow width={7} height={4} fill={"#666666"} />
                                </ListItemIcon>
                            </ListItemButton>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ ml: "32px" }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>
                                            <StartOn fill="#FFBB00" />
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <ListItemButton sx={{ ml: "32px" }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>
                                            <StartOff fill="#DDDDDD" />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <StartOff fill="#DDDDDD" />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <StartOff fill="#DDDDDD" />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton className={""}>
                        <ListItemText primary="1Depth Menu" />
                        <ListItemIcon>
                            <Arrow width={7} height={4} fill={"#0046ff"} />
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton className={""}>
                        <ListItemText primary="1Depth Menu" />
                        <ListItemIcon>
                            <Arrow width={7} height={4} fill={"#0046ff"} />
                        </ListItemIcon>
                    </ListItemButton>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub MuiList-sub-active"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <Arrow width={7} height={4} fill={"#666666"} />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <StartOff fill="#DDDDDD" />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <StartOff fill="#DDDDDD" />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: "16px" }} className={"MuiList-sub"}>
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>
                                    <StartOff fill="#DDDDDD" />
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </nav>
        </div>
    );
};

export default Adminsidebar;
