import { headers } from "next/headers";
import { auth } from "./auth";


// export const getAllDest = async () => {
//     const { token } = await auth.api.getToken({
//         headers: await headers()
//     });

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-destinations`, {
//         cache: "no-store",
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     });
//     return res.json();
// };

// export const getDest = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-destinations`);
//     return res.json();
// };

export const getDestBySlug = async (slug) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-destinations/${slug}`,{
        headers: {
            authrization: `Bearer ${token}`
        },
    })
    return res.json();
};