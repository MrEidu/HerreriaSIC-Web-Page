import express from "express";
const student = express.Router();

student.get('/', (req,res) => {
    res.send('students api route');
});

export default student;