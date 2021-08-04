const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");

// router.get("/", (req, res) => {
//   res.send("i am from router file");
// });

//create
router.post("/", async (req, res) => {
  const data = new InfoRouter({
    Name: req.body.Name,
    Age: req.body.Age,
    City: req.body.City,
  });
  await data.save();
  res.send(data);
});
//get all
router.get("/", async (req, res) => {
  const finddata = await InfoRouter.find();
  res.send(finddata);
});
//update
router.put("/update", async (req, res) => {
  const update = await InfoRouter.update(
    { _id: req.body._id },
    {
      $set: {
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City,
      },
    }
  );
  res.send(update);
});

router.delete("/delete/:id", async (req, res) => {
  const deldata = await InfoRouter.findByIdAndRemove(req.params.id).then(e => {
    res.send({ deleted: "deleted successfully" });
  });
});
module.exports = router;
