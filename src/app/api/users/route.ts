import { NextResponse } from "next/server"
import { users } from "./db"

export const GET = async () => {

    const data = users;

    return NextResponse.json({ data });
    
}