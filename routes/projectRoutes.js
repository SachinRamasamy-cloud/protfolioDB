import express from "express"
import { createPro, delPro, getAllproject, getByIDproject, updatePro } from "../controler/projectControler.js"


const router = express.Router()
router.get("/", getAllproject)
router.get("/:id", getByIDproject)
router.post("/", createPro)
router.put("/:id", updatePro)
router.delete("/:id", delPro)

export default router