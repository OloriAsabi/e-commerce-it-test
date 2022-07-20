import React, { useEffect, useState } from 'react';
import axios from "axios";

const baseUrl =  "https://fakestoreapi.com/products";

const headers =  {
    "accept": "application/json",
  }

export const getProducts = () => {
    try {
        const data  = axios.get(baseUrl);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)  
    }
}



export const getProductId = (id) => {
    try {
        const req = axios.get(baseUrl + '/' + id, {
            responseType: 'json'
        });

        console.log("Details", req);
        return req;
    } catch (error) {
        console.log(error)  
    }
}

