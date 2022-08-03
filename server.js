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

const getTenantData = async (req, res) => {
  let pathname = req.pathname || req.originalUrl
  let subDomain = req.hostname.split('.')[0]
  let tenant = subDomain.includes('localhost') ? 'marvel-dev' : subDomain

  const endpoint = `https://${API_ENDPOINT}`

  // const metadata = await axios.get()
  // await axios.get(
  //   endpoint + '/env-config',
  //   { headers: { organization: `https://${tenant}.fanhero.tv` } }
  // ).then((result) => {
  //   const decryptedEnv = crypto.AES.decrypt(
  //     result.data.body.data.result,
  //     REMOVE_ENV_SECRET
  //   )
  //   const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
  //   console.log(data)
  // })

  // let page = seo.find((item) => item.path === pathname)
  // let page = seo.find((item) => item.tenant === tenant)

  // console.log('----------------')
  // console.log('SEO', page)
  console.log('HOST:', req.hostname)
  console.log('TENANT:', tenant)
  console.log('PATH: ', pathname)

  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let defineValues = { ...defaultValues }
  // if (page) { defineValues = { ...defaultValues, ...page } }

  let isPost = pathname.includes('/post/')
  if (isPost) {
    const startPosition = pathname.indexOf('/post/') + 6
    const postSlug = pathname.slice(startPosition, pathname.length)
    await axios
      .get(`${endpoint}/posts/metadata?slug=${postSlug}`)
      .then(({ data }) => {
        const image = data.body.data.image.baseUrl + '/' + data.body.data.image.imgPath
        defineValues = {
          ...defaultValues,
          favicon: 'https://express-favicon.herokuapp.com/coca-cola',
          title: data.body.data.title,
          description: data.body.data.description,
          url: pathname,
          image
        }
      })
      .catch(err => console.log(err))
  }

  let isCategory = pathname.includes('/category/')
  if (isCategory) {
    const startPosition = pathname.indexOf('/category/') + 10
    const postSlug = pathname.slice(startPosition, pathname.length)
    await axios
      .get(`${endpoint}/categories/metadata?slug=${postSlug}`)
      .then(({ data }) => {
        const image = data.body.data.image.baseUrl + '/' + data.body.data.image.imgPath
        defineValues = {
          ...defaultValues,
          // favicon: 'https://express-favicon.herokuapp.com/coca-cola',
          title: data.body.data.title,
          description: data.body.data.description,
          url: pathname,
          image
        }
      })
      .catch(err => console.log(err))
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