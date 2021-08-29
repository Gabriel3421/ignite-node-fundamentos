const express = require("express")

const app = express()
let courses = ["curso 1", "curso 2", "curso 3"]
app.use(express.json())
app.get("/courses", (req, res) => {
  return res.json(courses)
})
app.post("/courses", (req, res) => {
  const newCouse = req.body.course
  courses.push(newCouse)
  return res.json(courses)
})
app.put("/courses/:index", (req, res) => {
  const updatedCourse = req.body.course
  const index = Number(req.params.index)
  console.log(updatedCourse)
  console.log(index)
  courses = courses.map((item, i) => {
    console.log(index === i)
    if (index === i) {
      console.log('aki')
      return updatedCourse
    }
    return item
  })
  return res.json(courses)
})
app.patch("/courses/:index", (req, res) => {
  const updatedCourse = req.body.course
  const index = Number(req.params.index)
  console.log(updatedCourse)
  console.log(index)
  courses = courses.map((item, i) => {
    console.log(index === i)
    if (index === i) {
      console.log('aki')
      return updatedCourse
    }
    return item
  })
  return res.json(courses)
})
app.delete("/courses/:index", (req, res) => {
  const index = Number(req.params.index)
  courses = courses.filter((item, i) => i !== index)
  return res.json(courses)
})

app.listen(3333, () => console.log('server running '));