'use strict'

import {DateHelper} from '../Utils'

import SimpleRoute from './SimpleRoute'
import RelayRoute from './RelayRoute'
import NavigatorRoute from './NavigatorRoute'
import TabBarRoute from './TabBarRoute'

import Cinemas from '../Views/Cinemas'
import Billboard from '../Views/Billboard'
import ComingSoon from '../Views/ComingSoon'
import Theaters from '../Views/Theaters'
import Functions from '../Views/Functions'
import Show from '../Views/Show'
import PhotoGallery from '../Views/PhotoGallery'
import Videos from '../Views/Videos'
import VideosWebView from '../Views/VideosWebView'
import ShowCast from '../Views/ShowCast'

export function getApplicationRoutes() {
  return new NavigatorRoute({
		initialRoute: new TabBarRoute({
			hideNavBar: true,
			tabBarRoutes:
			[
				getCinemasNavigatorRoute(),
				getBillboardRoute(),
				getComingSoonRoute(),
				getVideosNavigatorRoute()
			]
		})
	})
}

export {
	getTheatersRoute,
	getFunctionsRoute,
	getShowRoute,
	getShowCastRoute,
	getPhotoGalleryRoute,
	getVideosWebViewRoute
}

function getCinemasRoute() {
	return new SimpleRoute({
		title: 'Cinemas',
		component: Cinemas
	})
}

function getBillboardRoute() {
	return new RelayRoute({
		title: 'Cartelera',
		component: Billboard,
		tabBarIcon: require('../../assets/Billboard.png')
	})
}

function getComingSoonRoute() {
	return new RelayRoute({
		title: 'Próximamente',
		component: ComingSoon,
		tabBarIcon: require('../../assets/ComingSoon.png')
	})
}

function getVideosRoute() {
	return new RelayRoute({
		title: 'Videos',
		component: Videos
	})
}

function getVideosNavigatorRoute() {
	return new NavigatorRoute({
		title: 'Videos',
		tabBarIcon: require('../../assets/Videos.png'),
		initialRoute: getVideosRoute()
	})
}
function getCinemasNavigatorRoute() {
	return new NavigatorRoute({
		title: 'Cinemas',
		tabBarIcon: require('../../assets/Cinemas.png'),
		initialRoute: getCinemasRoute()
	})
}

function getTheatersRoute(name, cinema_id) {
	return new RelayRoute({
		title: name,
		component: Theaters,
		relayParams: {
			cinema_id: cinema_id
		}
	})
}

function getFunctionsRoute(name, theater_id) {
	const date_start = DateHelper.getFormattedDate(new Date())
	const dates = DateHelper.getWeekDates(new Date())
	return new RelayRoute({
		title: name,
		component: Functions,
		relayParams: {
			date_start: date_start,
			theater_id: theater_id
		},
		extraProps: {
			dates: dates
		}
	})
}

function getShowRoute(show_id) {
	return new RelayRoute({
		hideNavBar: true,
		component: Show,
		relayParams: {
			show_id: show_id
		}
	})
}

function getShowCastRoute(people) {
	return new SimpleRoute({
		title: "Elenco",
		component: ShowCast,
		extraProps: {
			people: people
		}
	})
}

function getPhotoGalleryRoute(images) {
	return new SimpleRoute({
		hideNavBar: true,
		title: "Elenco",
		component: PhotoGallery,
		extraProps: {
			images: images
		}
	})
}

function getVideosWebViewRoute() {
	return new SimpleRoute({
		component: VideosWebView
	})
}

