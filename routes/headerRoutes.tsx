import React from 'react';
import { dashboardPagesMenu, demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';

const headers = [
	{ path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.path, element: null },
	{ path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyContent.path, element: null },
	{ path: pageLayoutTypesPagesMenu.blank.path, element: null },
	{ path: demoPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.page404.path, element: null },
	{ path: demoPagesMenu.knowledge.subMenu.grid.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: <DashboardHeader /> },
	{
		path: demoPagesMenu.projectManagement.subMenu.list.path,
		element: <DashboardHeader />,
	},
	{ path: demoPagesMenu.pricingTable.path, element: <DashboardHeader /> },
];

export default headers;
