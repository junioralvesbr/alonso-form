import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from 'fs'

const resend = new Resend('re_8FWisSxs_9oF6BT7JykfgUwRMcCRsNfhG')

export async function POST(req, res) {
  console.log(req)
  const fileBuffer = fs.readFileSync('src/assets/foto.png')

  console.log(fileBuffer)

  try {
    // resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: 'jrnalves@gmail.com',
    //   subject: "Teste de Email",
    //   html: '<h1>Teste de email</h1>',
    //   attachments: [
    //     {
    //       filename: 'foto.png',
    //       content: fileBuffer
    //     }
    //   ]
    // })

    return NextResponse.json({ message: "Foi lindo" })

  } catch (error) {

    return NextResponse.json({ message: error })

  }

}