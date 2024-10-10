import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"


//API adding 
const addDoctor = async (req,res)=>{

    try {
        
        const { name , email , password , experince , speciality , degree , address , fees , about  } = req.body
        const image = req.file;

        // checking for data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experince || !fees || !about || !address) {
            return res.json({ success: false, message:"Missing Details"})
        }

        //validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message:"Please enter a valid email"})
        }

        //validating password
        if (password.length < 8) {
            return res.json({ success: false, message:"Please enter a Strong Password"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image
        const imageUpload = await cloudinary.uploader.upload(image.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experince,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({ imageUrl });
        res.json({success:true, message:"Doctor Added successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {addDoctor} 

