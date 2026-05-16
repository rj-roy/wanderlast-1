import { headers } from "next/headers";
import { auth } from "./auth";


export const getDest = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-destinations`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return res.json();
};