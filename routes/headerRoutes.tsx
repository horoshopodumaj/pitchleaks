import React from 'react';
import {
	componentPagesMenu,
	dashboardPagesMenu,
	demoPagesMenu,
	pageLayoutTypesPagesMenu,
} from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
// import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
// import SummaryHeader from '../pages/_layout/_headers/SummaryHeader';
// import PageLayoutHeader from '../pages/_layout/_headers/PageLayoutHeader';
// import ComponentsHeader from '../pages/_layout/_headers/ComponentsHeader';
// import FormHeader from '../pages/_layout/_headers/FormHeader';
// import ContentHeader from '../pages/_layout/_headers/ContentHeader';
// import UtilitiesHeader from '../pages/_layout/_headers/UtilitiesHeader';
// import IconHeader from '../pages/_layout/_headers/IconHeader';
// import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

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
	// {
	// 	path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.singlePages.subMenu.boxedSingle.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.sales.subMenu.transactions.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.chat.subMenu.withListChat.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.chat.subMenu.onlyListChat.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/[id]`,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.crm.subMenu.dashboard.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: demoPagesMenu.crm.subMenu.customersList.path,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: `${demoPagesMenu.crm.subMenu.customerID.path}/[id]`,
	// 	element: <ProfilePageHeader />,
	// },
	// {
	// 	path: dashboardPagesMenu.summary.path,
	// 	element: <SummaryHeader />,
	// },
	// {
	// 	path: `${pageLayoutTypesPagesMenu.asideTypes.path}/*`,
	// 	element: <PageLayoutHeader />,
	// },
	// {
	// 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.headerAndSubheader.path,
	// 	element: <PageLayoutHeader />,
	// },
	// {
	// 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyHeader.path,
	// 	element: <PageLayoutHeader />,
	// },
	// {
	// 	path: `${componentPagesMenu.components.path}/*`,
	// 	element: <ComponentsHeader />,
	// },
	// {
	// 	path: `${componentPagesMenu.forms.path}/*`,
	// 	element: <FormHeader />,
	// },
	// {
	// 	path: `${componentPagesMenu.content.path}/*`,
	// 	element: <ContentHeader />,
	// },
	// {
	// 	path: `${componentPagesMenu.utilities.path}/*`,
	// 	element: <UtilitiesHeader />,
	// },
	// {
	// 	path: `${componentPagesMenu.icons.path}/*`,
	// 	element: <IconHeader />,
	// },
	// {
	// 	path: `/*`,
	// 	element: <DefaultHeader />,
	// },
];

export default headers;
