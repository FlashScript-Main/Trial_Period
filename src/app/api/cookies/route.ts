// import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// First Way
export const GET = async (request: NextRequest) => {
    const theme = request.cookies.get("theme");

    console.log(theme);

    return new Response("Cookies API data", {
        headers: {
            "Set-Cookie": "theme=dark",
        }
    })
}


// Second Way
// export const GET = async () => {
//     cookies().set("theme", "dark");

//     console.log(cookies().get("theme"));

//     return new Response("Cookies API data", {
//         headers: {
//             "Set-Cookie": "theme=dark",
//         }
//     })
// }


/* --------------------------------------------- */


// Cookies Auth Token
// export const GET = async () => {
//     const token = cookies().get("token");

//     if (!token) {
//         return new Response("No Auth Token");
//         // OR
//         redirect("/sign-up")
//     }

//     return new Response("Cookies Auth Token");
// }