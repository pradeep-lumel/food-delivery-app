const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel');


exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });
        res.json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        res.json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();  
        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No users found',
            });
        }
        res.json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.loginUser=async(req,res)=>{
  try {
    const{email,password}=req.body
    const user=await userModel.findOne({email});
    if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(401).json({
            success: false,
            message: 'Invalid email or password',
        });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '100d',
    });
    res.json({
        success: true,
        token,
        user,
    });
  } catch (error) {
     res.status(400).json({
        success:false,
        message:error.message
     })
  }
}

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const user = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.json({
            success: true,
            message: 'User deleted successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
