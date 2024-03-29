import { Table } from "antd"
import { useContext, useState } from "react"
import { myContext } from "./Context"

export default function Cart() {
    const {setSearch} = useContext(myContext) 
    return (
        <>
            <h1 className="h1 text-center mt-5" style={{color: "green"}}>Welcome to our Store</h1>
            <div className="text-center">
            <input className="mt-3 center text-center container fuild" style={{outline: "none"}} type="search" name="" id="" placeholder="Search..." onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>
        </>
    )
}