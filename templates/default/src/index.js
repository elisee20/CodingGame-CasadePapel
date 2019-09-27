/**
 * @file Entry point of the app
 */
import { Router, globals, logger } from 'splay'
import Connector from '@connector'
import '@css/style.less'

// import components asynchronously
const Details = () => import(/* webpackChunkName: "details" */'./components/details')

logger.mode = DEBUG

function launch () {
  // init Router
  Router.init('app', [
    { re: /^(.*)$/, Component: Details }
  ], () => globals.isBox && Connector.ready(() => Connector.registerKeys()))
}

// active remote control & box communication
Connector.init().then(launch)
