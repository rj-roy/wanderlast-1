import { headers } from "next/headers";
import { auth } from "./auth";


export const getDest = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch('https://wanderlast-1-cmfg.onrender.com/get-destinations', {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return res.json();
};