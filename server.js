const express = require("express");
const path = require("path");
const fs = require("fs");
const seo = require("./seo");
const app = new express();
const PORT = process.env.PORT || 3003

app.use("/static", express.static(path.join(__dirname, "build/static")));
app.get('/test', (req, res) => res.send('ok test again'))
app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl;
  let page = seo.find((item) => item.path === pathname);
  if (page) {
    let html = fs.readFileSync(path.join(__dirname, "build", "index.html"));
    let htmlWithSeo = html
      .toString()
      .replace("__SEO_TITLE__", page.title)
      .replace("__SEO_DESCRIPTION__", page.description);
    return res.send(htmlWithSeo);
  }
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log("listened on " + PORT))