import { BASE_API_URL } from "../constant/Url";
import { Routes } from "../routes/Routes";

export const stocksDataApi = async({symbol})=>{
    const response = await fetch(`${BASE_API_URL}${Routes.stocksData}${symbol}`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    return await response.json();
}

export const singleDataApi = async()=>{
    const response = await fetch(`${BASE_API_URL}${Routes.allstocks}`,{
        method:"GET"
    })
    return await response.json();
}