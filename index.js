import express from "express";
import ogs from "open-graph-scraper-lite";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 8000;

app.post("/", (req, res) => {
  ogs({
    url: req.body.url,
  })
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
