import express from "express";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getOneUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
