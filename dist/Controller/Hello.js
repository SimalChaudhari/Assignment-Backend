"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloController = (req, res) => {
    res.json({ message: 'This is the data endpoint' });
};
exports.default = helloController;
