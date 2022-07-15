const express = require("express")
const path = require("path")
const fs = require("fs")
const seo = require("./seo")
const app = new express()
const PORT = process.env.PORT || 3004

const defaultValues = {
  favicon: '',
  title: 'Fanhero Video Platform',
  description: 'An end-to-end video platform powered by the Fanhero Video Technology Cloud',
  url: '<url-here>',
  image: 'https://fanhero.com/wp-content/uploads/img-home-2.jpg.webp',
  domain: 'fanhero.tv'
}


const getTenantData = (req, res) => {
  let pathname = req.pathname || req.originalUrl
  let subDomain = req.hostname.split('.')[0]
  let tenant = subDomain.includes('localhost') ? 'marvel-dev' : subDomain
  // let page = seo.find((item) => item.path === pathname)
  let page = seo.find((item) => item.tenant === tenant)

  console.log('----------------')
  console.log('SEO', page)
  console.log('HOST:', req.hostname)
  console.log('TENANT:', tenant)
  console.log('PATH: ', pathname)

  let html = fs.readFileSync(path.join(__dirname, "build", "index.html"))
  let defineValues = { ...defaultValues }
  if (page) { defineValues = { ...defaultValues, ...page } }

  const MOCK_PATH = [
    '/c/avengers/post/doctor-strange-in-the-multiverse-of-madness',
    '/c/avengers/post/doctor-strange-in-the-multiverse-of-madness/',
  ]

  let isPost = MOCK_PATH.includes(pathname)
  console.log(isPost)
  if (isPost) {
    defineValues = {
      ...defaultValues,
      favicon: 'https://express-favicon.herokuapp.com/coca-cola',
      title: "Doctor Strange in the Multiverse of Madness",
      description: "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
      url: 'https://webapp-react-feat-dynam-fhfk1f.herokuapp.com/c/avengers/post/doctor-strange-in-the-multiverse-of-madness',
      image: 'https://legadodamarvel.com.br/wp-content/uploads/2022/07/Grande-ator-da-Marvel-e-preso-alcoolizado-e-fas-teorizam-sua-demissao-legadodamarvel-750x394.webp',
    }
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