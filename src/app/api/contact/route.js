import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConn();                     // establish the mongodb connection
        const data = await Contact.find();  // fetch all data from the contactDB.contacts table
        return NextResponse.json(
            { result: data },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!", error: error },
            { status: 500 }
        );
    }
}

export async function POST(req, res) {
    try {
        if (req.method === "POST") {
            const body = await req.json();  // get the data pass for storing into the database
            await dbConn();                 // establish the mongodb connection
            await Contact.create(body);     // store data into the contactDB.contacts table
    
            return NextResponse.json(
                { message: "Message send successfully!" },
                { status: 201 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!", error: error },
            { status: 500 }
        );
    }
}
