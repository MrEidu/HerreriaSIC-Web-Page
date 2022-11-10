import express from "express";
import students from "./api/student";
import teachers from "./api/teacher";

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('main api route');
});

routes.use('/teachers', teachers);
routes.use('/students', students);

export default routes;