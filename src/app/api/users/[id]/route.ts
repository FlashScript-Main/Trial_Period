import { NextResponse } from "next/server";

type ResponseType = {
    params: {
        id: string;
    }
}

export const GET = async (
    _request: Request,
    response: ResponseType,
) => {

    console.log(response.params.id);

    return NextResponse.json({
        result: response.params.id
    })
}