const asyncHandler = require("express-async-handler");
const { create } = require("../models/userModel");
const User = require("../models/userModel");


const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({email})
    if(userExists)
    {
        res.status(400);
        throw new Error("user already exists");
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }
    else{
        res.status(400)
        throw new Error("Error Occured");
    }

  res.json({
    name,
    email,
  });
});

module.exports = { registerUser };
