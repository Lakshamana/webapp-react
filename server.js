const express = require("express")
const axios = require('axios')
const path = require("path")
const fs = require("fs")
const app = new express()
const PORT = process.env.PORT || 3004
const API_ENDPOINT = 'fourdotzero-dev.fanheroapi.com'

const defaultValues = {
  favicon: '',
  title: 'Fanhero Video Platform',
  description: 'An end-to-end video platform powered by the Fanhero Video Technology Cloud',
  url: 'https://fanhero.tv/',
  image: 'https://fanhero.com/wp-content/uploads/img-home-2.jpg.webp',
  domain: 'fanhero.tv'
}

const stripHTML = (text) => {
  if (!text) return ''
  return text.replace(/(<([^>]+)>)/gi, '')
}

const getTenantData = async (req, res) => {
  let pathname = req.pathname || req.originalUrl

  const endpoint = `https://${API_ENDPOINT}`
  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let defineValues = { ...defaultValues }

  const getData = async (postSlug, endpointName) => {
    return await axios
      .get(`${endpoint}/${endpointName}/metadata?slug=${postSlug}`)
      .then(({ data }) => {
        try {
          let defineImage = data.body.data.image
            ? `${data.body.data.image.baseUrl}/${data.body.data.image.imgPath}`
            : null
          defineValues = {
            ...defaultValues,
            // favicon: 'https://express-favicon.herokuapp.com/coca-cola',
            title: data.body.data?.title,
            description: stripHTML(data.body.data?.description),
            url: pathname,
            image: defineImage
          }
          return true
        } catch (error) {
          return false
        }
      })
      .catch(() => { return false })
  }

  const getDataByPath = async (path, endpointName) => {
    const startPosition = pathname.indexOf(path) + path.length
    let postSlug = pathname.slice(startPosition, pathname.length)
    if (postSlug.indexOf('/') >= 0) {
      postSlug = postSlug.slice(0, postSlug.indexOf('/') + 1).replace(/\//gm, '')
    }
    return await getData(postSlug, endpointName)
  }

  // TODO: Remove Cases
  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /post/ legends-marvel-heroes
  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /post/ ondemand-type-mp4-v4

  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /category/ legends
  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /category/ secret-invasion
  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /category/ iron-man

  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com/c/avengers /live/ myfirstlivee111

  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com /c/ avengers/categories
  // https://webapp-react-feat-dynam-r9nqjj.herokuapp.com /c/ avengers/feed

  let hasData
  const byPass = ['/favicon.ico', '/manifest.json']
  const postPath = '/post/'
  const categoryPath = '/category/'
  const livePath = '/live/'
  const channelPath = '/c/'

  if (byPass.includes(pathname)) {
    hasData = true
  }

  if (pathname.includes(postPath)) {
    hasData = await getDataByPath(postPath, 'posts')
  }
  if (pathname.includes(categoryPath) && !hasData) {
    hasData = await getDataByPath(categoryPath, 'categories')
  }
  if (pathname.includes(livePath) && !hasData) {
    hasData = await getDataByPath(livePath, 'live-events')
  }
  if (pathname.includes(channelPath) && !hasData) {
    hasData = await getDataByPath(channelPath, 'channels')
  }

  if (!hasData) {
    let subDomain = req.hostname.split('.')[0]
    let tenant = subDomain.includes('localhost')
      ? 'marvel-dev'
      : subDomain === 'webapp-react-feat-dynam-r9nqjj'
        ? 'marvel-dev'
        : subDomain

    getData(tenant, 'organizations')
  }

  let htmlWithSeo = html
    .toString()
    .replace("__SEO_FAVICON_ICON__", `${defineValues.favicon}/favicon.ico`)
    .replace("__SEO_FAVICON_APPLE__", `${defineValues.favicon}/logo192.png`)
    .replaceAll("__SEO_TITLE__", defineValues.title)
    .replaceAll("__SEO_DESCRIPTION__", defineValues.description)
    .replaceAll("__SEO_URL__", defineValues.url)
    .replaceAll("__SEO_IMAGE__", defineValues.image)
    .replaceAll("__SEO_DOMAIN__", defineValues.domain)
  return res.send(htmlWithSeo)
}

app.use("/static", express.static(path.join(__dirname, "build/static")))
app.get("*", getTenantData)
app.listen(PORT, () => console.log("listen on port: " + PORT))