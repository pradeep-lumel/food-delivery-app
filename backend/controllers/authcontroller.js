const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel');

//user register route
exports.registerUser = async (req, res) => {
    try {
        const { name,confirmPassword, email, password } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
            confirmPassword,
        });
        user.confirmPassword = undefined;

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


//get user detail route
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
//get all user route
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
//login user route
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
    return res.json({
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
//router for update user
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

exports.deleteAllUser = async (req, res) => {
    try {
        await userModel.deleteMany({});
        res.json({
            success: true,
            message: 'All Users deleted successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUserProfile=async(req,res)=>{
    try {
        const user = await userModel.findById(req.user.id).select('-password');
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, user });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
}