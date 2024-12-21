import { NextResponse } from "next/server";

export async function GET(request: Request) {

    // http://localhost:3000/api/fetch?query=""
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json(
            { error: "No query provided" },
            { status: 400 }
        )
    }

    const response = await fetch(`https://api.example.com/search?query=${query}`);
    const data = await response.json();

    return NextResponse.json(data);
}


/* ------------------------------------------------------------------------------------------------------------------------------------------- */


// Category.tsx
// const Category = () => {
//     const [category, setCategory] = useState<string | null>("");
//     
//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const response = await fetch(`/api/fetch?query=${category}`);
//         const data = await response.json();
//         setCategory(data.title);
//     }
//     
//     // { category?.length === 0 && <div>NOT Found</div> }
//     return (
//         <div>Category</div>
//     )

// }

// export default Category