const express = require("express")
const path = require("path")
const fs = require("fs")
const seo = require("./seo")
const app = new express()
const PORT = process.env.PORT || 3003

const defaultValues = {
  title: 'Fanhero Video Platform',
  description: 'An end-to-end video platform powered by the Fanhero Video Technology Cloud'
}

app.use("/static", express.static(path.join(__dirname, "build/static")))
app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl
  let page = seo.find((item) => item.path === pathname)
  console.log('SEO', page)
  if (!page) { page = defaultValues }
  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let htmlWithSeo = html
    .toString()
    .replace("__SEO_TITLE__", page.title)
    .replace("__SEO_DESCRIPTION__", page.description)
  return res.send(htmlWithSeo)
})

app.listen(PORT, () => console.log("listen on port: " + PORT))