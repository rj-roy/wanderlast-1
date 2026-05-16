import { revalidatePath } from "next/cache";

export const formSubmitAction = async (formData) =>{
    'use server'
    const newDes = Object.fromEntries(formData.entries());
    newDes.slug = newDes.destination_name.toLowerCase().replace(/\s+/g, '-');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newDes),
        cache: 'force-cache'
    });
    const data = await res.json();
    if(data.insertedId){
        revalidatePath('/');
    };
    return data;
};