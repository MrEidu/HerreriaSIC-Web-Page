"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_1 = __importDefault(require("./api/student"));
const teacher_1 = __importDefault(require("./api/teacher"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('main api route');
});
routes.use('/teachers', teacher_1.default);
routes.use('/students', student_1.default);
exports.default = routes;
