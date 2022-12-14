"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
//send enpoint
app.use('/api', routes_1.default);
//check for port
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
exports.default = app;
/*
const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;*/ 
