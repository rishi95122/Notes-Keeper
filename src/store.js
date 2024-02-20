export const setData=(item)=>{

    localStorage.setItem("notes",JSON.stringify(item));
}

export const getData=()=>{

    return JSON.parse(localStorage.getItem("notes"))
}