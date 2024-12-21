// import { headers } from "next/headers";
import { type NextRequest } from "next/server";

// First Way
export const GET = async (request: NextRequest) => {
    const requestHeaders = new Headers(request.headers);

    console.log(requestHeaders.get("Authorization"));

    return new Response("Profile API data");
}


// Second Way
// export const GET = async () => {
//     const headerList = headers();

//     console.log(headerList.get("Authorization"));

//     return new Response("Profile API data");
// }