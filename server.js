const express = require("express")
const axios = require('axios')
const path = require("path")
const fs = require("fs")
const app = new express()
const PORT = process.env.PORT || 3004
const API_ENDPOINT = 'https://fourdotzero-dev.fanheroapi.com'

const defaultValues = {
  favicon: {
    baseUrl: '',
    imgPath: ''
  },
  title: 'Fanhero Video Platform',
  description: 'An end-to-end video platform powered by the Fanhero Video Technology Cloud',
  url: 'https://fanhero.tv/',
  image: {
    baseUrl: 'https://fanhero.com',
    imgPath: 'wp-content/uploads/img-home-2.jpg.webp'
  },
  domain: 'fanhero.tv'
}

const stripHTML = (text) => text ? text.replace(/(<([^>]+)>)/gi, '') : ''

const getTenantData = async (req, res) => {
  let pathname = req.pathname || req.originalUrl

  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let defineValues = { ...defaultValues }
  const tenant = req.hostname.includes('localhost')
    ? 'https://marvel-dev.fanhero.tv'
    : req.hostname
  defineValues['domain'] = tenant
  defineValues['url'] = tenant

  const getDataByPath = async (path, endpointName) => {
    const startPosition = pathname.indexOf(path) + path.length
    let postSlug = pathname.slice(startPosition, pathname.length)
    if (postSlug.indexOf('/') >= 0) {
      postSlug = postSlug.slice(0, postSlug.indexOf('/') + 1).replace(/\//gm, '')
    }
    try {
      const anotherResponse = await axios.get(`${API_ENDPOINT}/${endpointName}/metadata?slug=${postSlug}`)
      const ANOTHER_DATA = anotherResponse?.data?.body?.data
      defineValues = { ...defineValues, ...ANOTHER_DATA }
      defineValues['description'] = stripHTML(defineValues.description)
      console.log(defineValues, 'ANOTHER')
      return true
    } catch (error) {
      console.log(defineValues, 'ANOTHER ERROR')
      return false
    }
  }

  let definedRequest
  const byPass = ['/favicon.ico', '/manifest.json']
  const postPath = '/post/'
  const categoryPath = '/category/'
  const livePath = '/live/'
  const channelPath = '/c/'

  if (byPass.includes(pathname)) {
    definedRequest = true
  } else {
    try {
      const orgResponse = await axios.post(`${API_ENDPOINT}/organizations/metadata`, { origin: tenant })
      const ORG_VALUES = orgResponse?.data?.body?.data
      defineValues = { ...defineValues, ...ORG_VALUES }
      console.log(defineValues, 'ORG')
    } catch (error) { }
  }

  if (pathname.includes(postPath) && !definedRequest) {
    definedRequest = await getDataByPath(postPath, 'posts')
    console.log('---- POSTS: ', postPath)
    console.log('---- HASDATA: ', definedRequest)
  }
  if (pathname.includes(categoryPath) && !definedRequest) {
    definedRequest = await getDataByPath(categoryPath, 'categories')
    console.log('---- CATEGORIES: ', categoryPath)
    console.log('---- HASDATA: ', definedRequest)
  }
  if (pathname.includes(livePath) && !definedRequest) {
    definedRequest = await getDataByPath(livePath, 'live-events')
    console.log('---- LIVE EVENTS: ', livePath)
    console.log('---- HASDATA: ', definedRequest)
  }
  if (pathname.includes(channelPath) && !definedRequest) {
    definedRequest = await getDataByPath(channelPath, 'channels')
    console.log('---- CHANNELS: ', channelPath)
    console.log('---- HASDATA: ', definedRequest)
  }

  let validateParams = ({ baseUrl, imgPath }, size) => {
    if (!baseUrl || !imgPath) return '/favicon.ico'
    return `${baseUrl}/${size}/filters:quality(75)/${imgPath}`
  }

  let htmlWithSeo = html
    .toString()
    .replace("__SEO_FAVICON32x32_ICON__", validateParams(defineValues.favicon, '32x32'))
    .replace("__SEO_FAVICON57x57_ICON__", validateParams(defineValues.favicon, '57x57'))
    .replace("__SEO_FAVICON76x76_ICON__", validateParams(defineValues.favicon, '76x76'))
    .replace("__SEO_FAVICON96x96_ICON__", validateParams(defineValues.favicon, '96x96'))
    .replace("__SEO_FAVICON128x128_ICON__", validateParams(defineValues.favicon, '128x128'))
    .replace("__SEO_FAVICON192x192_ICON__", validateParams(defineValues.favicon, '192x192'))
    .replace("__SEO_FAVICON228x228_ICON__", validateParams(defineValues.favicon, '228x228'))
    .replace("__SEO_FAVICON196x196_ICON__", validateParams(defineValues.favicon, '196x196'))
    .replace("__SEO_FAVICON120x120_ICON__", validateParams(defineValues.favicon, '120x120'))
    .replace("__SEO_FAVICON152x152_ICON__", validateParams(defineValues.favicon, '152x152'))
    .replace("__SEO_FAVICON180x180_ICON__", validateParams(defineValues.favicon, '180x180'))
    .replaceAll("__MANIFEST__", `${defineValues.url}/manifest.json`)
    .replaceAll("__SEO_TITLE__", defineValues.title)
    .replaceAll("__SEO_DESCRIPTION__", defineValues.description)
    .replaceAll("__SEO_URL__", defineValues.url)
    .replaceAll("__SEO_IMAGE__", validateParams(defineValues.image, '0x200'))
    .replaceAll("__SEO_DOMAIN__", defineValues.domain)
  return res.send(htmlWithSeo)
}

app.use("/static", express.static(path.join(__dirname, "build/static")))
app.get("*", getTenantData)
app.listen(PORT, () => console.log("listen on port: " + PORT))