require('dotenv').config()
const express = require('express')
const NodeCache = require('node-cache')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const app = new express()
const compression = require('compression')
const myCache = new NodeCache()

const PORT = process.env.PORT || 3004
const API_ENDPOINT = 'https://' + process.env.REACT_APP_API_ENDPOINT
const byPass = ['/favicon.ico', '/manifest.json', '/undefined', '/OneSignalSDKWorker.js']

const defaultValues = {
  favicon: {
    baseUrl: '',
    imgPath: '',
  },
  title: 'Fanhero Video Platform',
  description:
    'An end-to-end video platform powered by the Fanhero Video Technology Cloud',
  url: 'https://fanhero.tv/',
  image: {
    baseUrl: 'https://fanhero.com',
    imgPath: 'wp-content/uploads/img-home-2.jpg.webp',
  },
  domain: 'fanhero.tv',
}

const stripHTML = (text) => (text ? text.replace(/(<([^>]+)>)/gi, '') : '')

const validateParams = (imageData, size, quality = 75) => {
  if (!imageData?.baseUrl || !imageData?.imgPath) return '/favicon.ico'
  return `${imageData?.baseUrl}/${size}/filters:quality(${quality})/${imageData?.imgPath}`
}

const getData = async (req, res) => {
  let pathname = req.pathname || req.originalUrl
  let html = fs.readFileSync(path.join(__dirname, 'build', 'index.html'))
  let defineValues = { ...defaultValues }
  const tenant = req.hostname.includes('localhost')
    ? 'https://marvel-dev.fanhero.tv'
    : `${req.protocol}://${req.hostname}`
  defineValues['domain'] = tenant
  defineValues['url'] = tenant

  const headers = {
    organization: tenant,
    'content-type': 'application/json'
  }

  const getTenantData = () => axios.get(`${API_ENDPOINT}/organizations/metadata`, { headers })

  const getDataByPath = (path, endpointName) => {
    const startPosition = pathname.indexOf(path) + path.length
    let postSlug = pathname.slice(startPosition, pathname.length)
    if (postSlug.indexOf('/') >= 0) {
      postSlug = postSlug
        .slice(0, postSlug.indexOf('/') + 1)
        .replace(/\//gm, '')
    }
    return axios.get(`${API_ENDPOINT}/${endpointName}/metadata?slug=${postSlug}`, { headers })
  }

  const verifyRoute = () => {
    const postPath = '/post/'
    const categoryPath = '/category/'
    const livePath = '/live/'
    const channelPath = '/c/'
    if (pathname.includes(postPath)) {
      return getDataByPath(postPath, 'posts')
    }
    if (pathname.includes(categoryPath)) {
      return getDataByPath(categoryPath, 'categories')
    }
    if (pathname.includes(livePath)) {
      return getDataByPath(livePath, 'live-events')
    }
    if (pathname.includes(channelPath)) {
      return getDataByPath(channelPath, 'channels')
    }
    return getTenantData(headers)
  }

  try {
    let result = myCache.get(tenant + pathname)
    if (result !== undefined) return res.send(result)
    const PROMISE_DATA = await verifyRoute()
    let ORG_VALUES = PROMISE_DATA.data
    // TODO: Waiting backend normalize response
    if (ORG_VALUES?.body?.data) {
      ORG_VALUES = PROMISE_DATA.data?.body?.data
    }
    if (ORG_VALUES?.organization) {
      const { organization, ...allRest } = ORG_VALUES
      ORG_VALUES = { ...allRest, favicon: organization.favicon }
      // If "post" (or another) dont have image, we replace to use organization url
      if (!allRest.image?.baseUrl || !allRest.image?.imgPath) {
        ORG_VALUES = { ...ORG_VALUES, image: organization.image }
      }
      defineValues = { ...defineValues, ...ORG_VALUES }
      defineValues['description'] = stripHTML(defineValues?.description)
    } else {
      defineValues = { ...defineValues, ...ORG_VALUES }
    }
  } catch (error) { }

  let htmlWithSeo = html
    .toString()
    .replace(
      '__SEO_FAVICON32x32_ICON__',
      validateParams(defineValues.favicon, '32x32')
    )
    .replace(
      '__SEO_FAVICON57x57_ICON__',
      validateParams(defineValues.favicon, '57x57')
    )
    .replace(
      '__SEO_FAVICON76x76_ICON__',
      validateParams(defineValues.favicon, '76x76')
    )
    .replace(
      '__SEO_FAVICON96x96_ICON__',
      validateParams(defineValues.favicon, '96x96')
    )
    .replace(
      '__SEO_FAVICON128x128_ICON__',
      validateParams(defineValues.favicon, '128x128')
    )
    .replace(
      '__SEO_FAVICON192x192_ICON__',
      validateParams(defineValues.favicon, '192x192')
    )
    .replace(
      '__SEO_FAVICON228x228_ICON__',
      validateParams(defineValues.favicon, '228x228')
    )
    .replace(
      '__SEO_FAVICON196x196_ICON__',
      validateParams(defineValues.favicon, '196x196')
    )
    .replace(
      '__SEO_FAVICON120x120_ICON__',
      validateParams(defineValues.favicon, '120x120')
    )
    .replace(
      '__SEO_FAVICON152x152_ICON__',
      validateParams(defineValues.favicon, '152x152')
    )
    .replace(
      '__SEO_FAVICON180x180_ICON__',
      validateParams(defineValues.favicon, '180x180')
    )
    .replaceAll('__SEO_TITLE__', defineValues.title)
    .replaceAll('__SEO_DESCRIPTION__', defineValues.description)
    .replaceAll('__SEO_URL__', defineValues.url)
    .replaceAll(
      '__SEO_IMAGE__',
      validateParams(defineValues.image, '300x169', 20)
    )
    .replaceAll('__SEO_DOMAIN__', defineValues.domain)
  myCache.set(tenant + pathname, htmlWithSeo, 60 * 10)
  return res.send(htmlWithSeo)
}

app.enable('trust proxy')
app.use(compression())
app.get(byPass, express.static(path.join(__dirname, 'build')))
app.use('/static', express.static(path.join(__dirname, 'build/static')))
app.get('*', getData)
app.listen(PORT, () => console.log('listen on port: ' + PORT))
