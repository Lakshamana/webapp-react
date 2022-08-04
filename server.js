const express = require("express")
const axios = require('axios')
const path = require("path")
const fs = require("fs")
const app = new express()
const PORT = process.env.PORT || 3004
const API_ENDPOINT = 'fourdotzero-dev.fanheroapi.com' //process.env.REACT_APP_API_ENDPOINT

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
    await axios
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
          console.log(error, 'ERROR')
          return false
        }
      })
      .catch(() => false)
  }

  const getDataByPath = async (path, endpointName) => {
    const startPosition = pathname.indexOf(path) + path.length
    const postSlug = pathname.slice(startPosition, pathname.length)
    return await getData(postSlug, endpointName)
  }

  const postPath = '/post/'
  const categoryPath = '/category/'
  const livePath = '/live/'
  const channelPath = '/c/'
  let hasData

  if (pathname.includes(postPath)) {
    hasData = await getDataByPath(postPath, 'posts')
  }
  if (pathname.includes(categoryPath)) {
    hasData = await getDataByPath(categoryPath, 'categories')
  }
  if (pathname.includes(livePath)) {
    hasData = await getDataByPath(livePath, 'live-events')
  }
  if (pathname.includes(channelPath)) {
    hasData = await getDataByPath(channelPath, 'channels')
  }

  if (!hasData) {
    let subDomain = req.hostname.split('.')[0]
    let tenant = subDomain.includes('localhost')
      ? 'valetudo-dev'
      : subDomain === 'webapp-react-feat-dynam-r9nqjj'
        ? 'valetudo-dev'
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
// app.get("*", (_, res) => res.sendFile(path.join(__dirname, "build", "index.html")))

app.listen(PORT, () => console.log("listen on port: " + PORT))