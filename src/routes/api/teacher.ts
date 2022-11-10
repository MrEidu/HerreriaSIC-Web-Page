import express from "express";
const teacher = express.Router();

teacher.get('/', (req,res) => {
    res.send('teacher api route');
});

export default teacher;