import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Head from "next/head";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 300;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Layout({ children }) {
	const { data, error } = useSWR("/api/tables", fetcher);

	if (error) return <div>Failed to Load Tables</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<Box sx={{ display: "flex" }}>
			<Head>
				<title>AdventureWorks</title>
			</Head>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Reflect-React: AdventureWorks
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box"
					}
				}}>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						{data.map((row, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton>
									<Link passHref href={`/table/${row.table}`}>
										<ListItemText primary={row.table} />
									</Link>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
