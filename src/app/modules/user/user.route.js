import { Router } from "express";
const router = Router();


router.get("/", (req, res) => {
  res.json({ message: "Welcome user route" });
});
router.post("/", (req, res) => {
  res.json({ message: "Welcome user route" });
});
router.get("/email/:id", (req, res) => {
  res.json({ message: "Welcome user route" });
});


export const userRoute = router;    