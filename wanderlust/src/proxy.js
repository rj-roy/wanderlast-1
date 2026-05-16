import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await request.headers,
    });
    if(session){
        return NextResponse.redirect(new URL('/', request.url));
    }else{
        return NextResponse.next();
    };
};
export const config = {
    matcher:['/signin', '/signup']
}