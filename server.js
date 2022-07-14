const express = require("express")
const path = require("path")
const fs = require("fs")
const seo = require("./seo")
const app = new express()
const PORT = process.env.PORT || 3004

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

  console.log('SEO', page, 'req', 'HOST >>:', req.host)

  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  if (page) {
    let defineValues = { ...defaultValues, ...page }
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

  let htmlWithSeo = html
    .toString()
    .replace("__SEO_FAVICON_ICON__", `${defaultValues.favicon}/favicon.ico`)
    .replace("__SEO_FAVICON_APPLE__", `${defaultValues.favicon}/logo192.png`)
    .replaceAll("__SEO_TITLE__", defaultValues.title)
    .replaceAll("__SEO_DESCRIPTION__", defaultValues.description)
    .replaceAll("__SEO_URL__", defaultValues.url)
    .replaceAll("__SEO_IMAGE__", defaultValues.image)
    .replaceAll("__SEO_DOMAIN__", defaultValues.domain)
  return res.send(htmlWithSeo)
  // return res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(PORT, () => console.log("listen on port: " + PORT))