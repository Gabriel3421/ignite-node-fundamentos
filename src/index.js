const express = require("express")

const app = express()

app.get("/", (req, res) => {
  return res.json({ message: "funcionou" })
})

app.listen(3333, () => console.log('server running'));