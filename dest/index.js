"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
// Create instance from server
const app = (0, express_1.default)();
// Add route for the / path + defining HTTP verb = get
app.get('/', (req, res) => {
    res.send("Wla wla wla el so7ab yalla 🔥");
});
// Start express server
app.listen(port, () => {
    console.log(` Server is running at port: ${port}🔥`);
});
exports.default = app;
