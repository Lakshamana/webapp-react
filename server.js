const express = require("express")
const path = require("path")
const fs = require("fs")
const seo = require("./seo")
const app = new express()
const PORT = process.env.PORT || 3003

const defaultValues = {
  favicon: '%PUBLIC_URL%',
  title: 'Fanhero Video Platform',
  description: 'An end-to-end video platform powered by the Fanhero Video Technology Cloud',
  url: '<url-here>',
  image: 'https://fanhero.com/wp-content/uploads/img-home-2.jpg.webp',
  domain: 'fanhero.tv'
}

app.use("/static", express.static(path.join(__dirname, "build/static")))
app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl
  let page = seo.find((item) => item.path === pathname)
  console.log('SEO', page, req)
  let defineValues = { ...defaultValues, ...page }
  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let htmlWithSeo = html
    .toString()
    .replace("__SEO_FAVICON__", defineValues.favicon)
    .replace("__SEO_TITLE__", defineValues.title)
    .replace("__SEO_DESCRIPTION__", defineValues.description)
    .replace("__SEO_URL__", defineValues.url)
    .replace("__SEO_IMAGE__", defineValues.image)
    .replace("__SEO_DOMAIN__", defineValues.domain)
  return res.send(htmlWithSeo)
})

app.listen(PORT, () => console.log("listen on port: " + PORT))