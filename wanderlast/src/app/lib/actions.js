import { revalidatePath } from "next/cache";

export const formSubmitAction = async (formData) =>{
    'use server'
    const newDes = Object.fromEntries(formData.entries());
    
    const res = await fetch('http://localhost:5000/destinations',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newDes),
        cache: 'force-cache'
    });
    const data = await res.json();
    console.log(data);
    if(data.insertedId){
        revalidatePath('/');
    };
    return data;
};