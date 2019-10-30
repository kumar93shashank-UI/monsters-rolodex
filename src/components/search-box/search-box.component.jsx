import React from 'react'
import {Input} from "antd";
import "antd/dist/antd.css";
const {Search}=Input;
export default function searchbox({placeholder,handleChange}) {
    return (
        <div>
        <Search placeholder={placeholder} enterButton style={{width:'24%'}} 
        onChange={handleChange}/>
        </div>
    )
}
