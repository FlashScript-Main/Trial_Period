// import { notFound } from "next/navigation";
// import { Metadata } from "next";

// import { cache } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
    return ["category1", "category2", "category3"].map(category => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
    return {
        title: `Category: ${params.category}`,
        description: `Category: ${params.category}`,
    };
}

// export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {

//     const response = await fetch(`https://api.example.com/category/${params.category}`);

//     // if (response.status === 404) notFound();

//     const data = await response.json();

//     return {
//         title: `Category: ${data.title}`,
//         description: `Category: ${data.description}`,
//     };
// }


// const getCategoryCached = cache(getCategory);

// async function getCategory(category: string) {
//     const response = await fetch(`https://api.example.com/category/${category}`);
//     const data = await response.json();
//     return data;
// }


const Category = () => {

    // if (response.status === 405) notFound();

    // const category = getCategoryCached("category1");
    
    return (
        <div>Category</div>
    )

}

export default Category