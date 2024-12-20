import { comments } from "../data";

type ParamsType = {
    params: {
        id: string;
    }
}
export const GET = async (
    _request: Request, 
    { params }: ParamsType
) => {
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );

    return Response.json(comment);
}


/* --------------------------------------------- */


export const PATCH = async (
    request: Request, 
    { params }: ParamsType
) => {
    const body = await request.json();

    const { text } = body;

    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );

    comments[index].text = text;

    return Response.json(comments[index]);
}


/* --------------------------------------------- */


export const DELETE = async (
    _request: Request, 
    { params }: ParamsType
) => {
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );

    const deletedComment = comments[index];

    comments.splice(index, 1);

    return Response.json(deletedComment);
}