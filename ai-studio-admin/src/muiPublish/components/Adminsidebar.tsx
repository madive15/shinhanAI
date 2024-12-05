import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";

import "./Adminsidebar.scss";

const Adminsidebar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [menuId, setMenuId] = useState<string>();

    const menuClick = (menuId: string) => {
        setOpenMenu(!openMenu);
        setMenuId(menuId);
    };

    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
    const [subMenuId, setSubMenuId] = useState<string>();
    const subMenuClick = (subMenuId: string) => {
        setOpenSubMenu(!openSubMenu);
        setSubMenuId(subMenuId);
    };

    return (
        <div className="admin-sidebar">
            <div className="sidebar-tab">탭메뉴영역</div>
            <nav className="sidebar-nav">
                <List
                    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="side-menu"
                    subheader={
                        <ListSubheader component="div" id="side-menu">
                            menu
                        </ListSubheader>
                    }
                >
                    <ListItemButton
                        className={menuId === "1" && openMenu === true ? "MuiList-active" : ""}
                        onClick={() => menuClick("1")}
                    >
                        <ListItemText primary="1Depth Menu" />
                        <ListItemIcon>1</ListItemIcon>
                    </ListItemButton>
                    <Collapse in={menuId === "1" && openMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton
                                className={subMenuId === "1-1" && openSubMenu === true ? "MuiList-sub-active" : ""}
                                onClick={() => subMenuClick("1-1")}
                            >
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>1-1</ListItemIcon>
                            </ListItemButton>
                            <Collapse in={subMenuId === "1-1" && openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>1-1-1</ListItemIcon>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>1-1-2</ListItemIcon>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton
                                className={subMenuId === "1-2" && openSubMenu === true ? "MuiList-sub-active" : ""}
                                onClick={() => subMenuClick("1-2")}
                            >
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>1-2</ListItemIcon>
                            </ListItemButton>
                            <Collapse in={subMenuId === "1-2" && openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>1-2-1</ListItemIcon>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>

                    <ListItemButton
                        className={menuId === "2" && openMenu === true ? "MuiList-active" : ""}
                        onClick={() => menuClick("2")}
                    >
                        <ListItemText primary="1Depth Menu" />
                        <ListItemIcon>2</ListItemIcon>
                    </ListItemButton>
                    <Collapse in={menuId === "2" && openMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton
                                className={subMenuId === "2-1" && openSubMenu === true ? "MuiList-sub-active" : ""}
                                onClick={() => subMenuClick("2-1")}
                            >
                                <ListItemText primary="2Depth Menu" />
                                <ListItemIcon>2-1</ListItemIcon>
                            </ListItemButton>
                            <Collapse in={subMenuId === "2-1" && openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>2-1-1</ListItemIcon>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="3Depth Menu" />
                                        <ListItemIcon>2-1-2</ListItemIcon>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                </List>
            </nav>
        </div>
    );
};

export default Adminsidebar;
