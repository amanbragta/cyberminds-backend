import Posting from "../models/posting.model.js";

export const addPosting = async (req, res) => {
  const {
    title,
    company,
    location,
    type,
    salary,
    deadline,
    description,
    image,
  } = req.body;
  const newPosting = new Posting({
    title,
    company,
    location,
    type,
    salary,
    deadline,
    description,
    image,
  });
  const savePosting = await newPosting.save();
  res.status(200).send(savePosting);
};

export const getPostings = async (req, res) => {
  const postings = await Posting.find();
  res.status(200).send(postings);
};
