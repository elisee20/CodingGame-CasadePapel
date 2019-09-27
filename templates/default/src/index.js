/**
 * @file Entry point of the app
 */
import { Router, globals, logger } from 'splay'
import Connector from '@connector'
import '@css/style.less'

// import components asynchronously
const Details = () => import(/* webpackChunkName: "details" */'./components/details')
const Detail = () => import(/* webpackChunkName: "detail" */'./components/detail')
const Example = () => import(/* webpackChunkName: "example" */'./components/example')
const InfosMedia = () => import(/* webpackChunkName: "InfosMedia" */'./components/InfosMedia/InfosMedia')

logger.mode = DEBUG

function launch () {
  // init Router
  Router.init('app', [
    { re: /^(.*)$/, Component: Details },
    { re: /^detail/, Component: Detail },
    { re: /^(.*)$/, Component: Example },
    { re: /^(.*)$/, Component: InfosMedia }
  ], () => globals.isBox && Connector.ready(() => Connector.registerKeys()))
}

// active remote control & box communication
Connector.init().then(launch)
