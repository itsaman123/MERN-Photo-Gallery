const { Router } = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const UploadModel = require("../models/UploadModel");

const router = Router();

router.get("/api/get", async (req, res) => {
  const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
  res.send(allPhotos);
});

router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
  const photo = req.file.filename;

  console.log(photo);

  UploadModel.create({ photo })
    .then((data) => {
      console.log("Uploaded Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});


router.delete("/api/delete/:id", async (req, res) => {
  const photoId = req.params.id;

  try {
    // Find the photo by ID
    const photo = await UploadModel.findById(photoId);

    // Check if the photo exists
    if (!photo) {
      return res.status(404).send("Photo not found");
    }

    // Delete the photo from the database
    await photo.deleteOne();

    // Respond with success
    res.send("Photo deleted successfully");
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

module.exports = router;
