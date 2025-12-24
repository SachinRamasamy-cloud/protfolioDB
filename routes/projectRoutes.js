// import express from "express"
// import { createPro, delPro, getAllproject, getByIDproject, updatePro } from "../controler/projectControler.js"
// import upload from "../multer.js"


// const router = express.Router()
// router.get("/", getAllproject)
// router.get("/:id", getByIDproject)
// router.post("/", createPro)
// router.put("/:id", updatePro)
// router.delete("/:id", delPro)
// router.post("/projects", upload.single("image"), createPro);

// export default router

import express from "express";
import {
  createPro,
  delPro,
  getAllproject,
  getByIDproject,
  updatePro,
} from "../controler/projectControler.js";
import upload from "../multer.js";

const router = express.Router();

router.get("/", getAllproject);
router.get("/:id", getByIDproject);

// CREATE with image
router.post("/", upload.single("image"), createPro);

// UPDATE with optional image
router.put("/:id", upload.single("image"), updatePro);

router.delete("/:id", delPro);

export default router;
