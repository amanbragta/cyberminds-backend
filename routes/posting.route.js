import express from "express";
import { addPosting, getPostings } from "../controller/posting.controller.js";

const router = express.Router();

router.post("/add", addPosting);
router.get("/postings", getPostings);

export default router;
