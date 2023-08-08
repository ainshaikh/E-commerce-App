import userModel from '../Models/userModels.js'
import hashPassword from './../helpers/authHelper.js';
export const registerController = async (req, res) =>{
    try {
        const {name, email, password, phone, address} = req.body;

        // Validation
        if(!name){
            return res.send({error: 'Name is required'})
        }
        if(!email){
            return res.send({error: 'Email is required'})
        }
        if(!password){
            return res.send({error: 'Password is required'})
        }
        if(!phone){
            return res.send({error: 'Phone no is required'})
        }
        if(!address){
            return res.send({error: 'Address is required'})
        }

        // check user
        const existingUser = await userModel.findOne({email})
        // existing user
        if(existingUser){
            return  res.status(200).send({
                success: true,
                message: 'User already exist. Please login'
            })
        }

        // Register user
        const hashedPassword = await hashPassword(password);

        // save
        let user = new userModel ({name,email,password:hashPassword,address,phone}).save()

        res.status(201).send({
            success: true,
            message: 'User Register successfully',
            user
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error: 'Error in registration',
            error
        })     
        error
    }
};