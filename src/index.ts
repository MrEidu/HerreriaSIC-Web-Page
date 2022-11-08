import express from "express";

const app = express();
const port = 5000;

//send enpoint
app.get('/api', (req, res) => {
res.send("Hello World");
});

//check for port
app.listen(port, () => console.log(`Listening on port  ${port}!`));

export default app;

/*
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;*/