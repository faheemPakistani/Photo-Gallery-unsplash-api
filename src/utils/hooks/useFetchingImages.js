import React, { useEffect, useState } from 'react'
import Axios from 'axios';
const url = process.env.REACT_APP_UNSPLASH_API;
const key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchingImages(page,searchImage) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        Axios.get(
            `${url}/photos?client_id=${key}&page=${page}`
        ).then((res)=>{
            setImages([...images, ...res.data]);
        }).catch((error)=>{
            setErrors(error.response.data.errors)
        })
    }, [page]) //to re-run when vaalue of page changes

    // useEffect(() => {
    //     if (searchImage === null) return; 
    //     Axios.get(
    //         `${url}/search/photos?client_id=${key}&page=${page}&query=${searchImage}`
    //     ).then((res)=>{
    //         setImages([...res.data.results]);
    //     }).catch((error)=>{
    //         setErrors(error.response.data.errors)
    //     })
    // }, [searchImage])
    return [images,setImages,errors];
}

