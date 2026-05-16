import { revalidatePath } from "next/cache";

export const formSubmitAction = async (formData) =>{
    'use server'
    const newDes = Object.fromEntries(formData.entries());
    
    const res = await fetch('https://wanderlast-1-cmfg.onrender.com/destinations',{
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