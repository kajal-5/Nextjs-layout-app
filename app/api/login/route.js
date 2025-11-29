import { signToken } from "../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json(); 


  if(email!=="abc@gmail.com" || password !=="password123"){
    return NextResponse.json({message:"Invalid credentials"},{status:401});
  }
 
    const token = await signToken({ email,"role":"user" });
    const res =NextResponse.json({ message: "Login successful" });
    res.cookies.set("token", token, {
         httpOnly: true, 
         maxAge: 3600, 
        path: "/"
    })
    return res;
}