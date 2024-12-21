// import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { comments } from "./data";

// export const GET = async () => {
//     return Response.json(comments);
// }

// export const GET = async () => {
//     return NextResponse.json(comments)
// }

/* --------------------------------------------- */


export const POST = async (request: Request) => {

    const comment = await request.json();

    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}


/* --------------------------------------------- */


// http://localhost:3000/api/main?query=first
export const GET = async (request: NextRequest) => {

    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get("query");

    const filteredComments = query ? comments.filter(
        (comment) => comment.text.includes(query)
    ) : comments;

    return Response.json(filteredComments);
}