export const getDest = async () =>{
    const res = await fetch('http://localhost:5000/get-destinations',{
        cache: "no-store",
    });
    return res.json();
};