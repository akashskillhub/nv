import asyncHandler from "express-async-handler"

export const register = asyncHandler(async (req, res) => {
    const { name, email, password, mobile } = req.body


})