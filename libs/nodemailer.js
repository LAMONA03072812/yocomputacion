import nodemailer from 'nodemailer';
const trasporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: process.env.SMTP_PORT == 465,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        
    },
    
});

export default transporter;

import transporter from  "@/libs/nodemailer";

export default async function handler (req, res){
    if (req.method === "POST") {
        const { name,email,message} = req.body;
        
        if(!name || !email || !message ){
        return res.status(400).json({ error: "Please fill all fields" });
        }

        const mailData = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'New message from  ${name}',
        text: message,
        html:'<p>${message}<p>',
        };

        try {

        const info = await transporter.sendMail(mailData);
        return res.status(200).json ({message: "Email sent", info });
        } catch (error) {
            console.log(error);
        return res.status (500).json ({ message: "Error sending email",

    error});}
    }

    return res.status(405).json({ error: "Method not allowed"});

    import { useState, useEffect} from "react";
    import axios from "axios";
    import Image from "next/image";
    import toast from "react-hot-toast";

export default function Test(){
    const[products, setProducts] = useState([]);

    const 
        
    }, interval);]

}







