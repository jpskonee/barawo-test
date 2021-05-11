import React, { useState, useEffect } from 'react'
import { app } from "../base.js"
import "../App.css" 

const barawos = app.firestore().collection("barawos");

const btnStyle = {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    color: "white",
    fontSize: "20px",
    }

const Read = () => {
    const  foundScammer = []
    const [search, setSearch] = useState([])
    const [dataDb, setDataDb] = useState([])
    const [onload, setOnload] = useState(true)
    const [onSearch, setOnSearch] = useState(false)

    //handling onchange when the input receieves value
    const handleSearch = (event) => {
        setSearch(event.target.value)
         setOnload(false)
    }
 
    //handling when you search for a particular scammer
    
    const handleClick = async (event) => {
        setOnSearch(true)
        await barawos.onSnapshot(snapsArray => {
            snapsArray.forEach((scammer) => {
                console.log(`scammer: ${scammer.data().phone}`)
                if (scammer.data().phone === search) {
                        console.log("yes")
                        foundScammer.push(scammer.data())
                } else { console.log("No") }
            })
        })
        
        
            event.preventDefault();
        }
        
    
    //Handling when the page loads
    const onLoadData = async () => {
        await barawos.onSnapshot(snapsArray => {
            const scammers = [];
            snapsArray.forEach((scammer) => {
                scammers.push({...scammer.data(), id: scammer.id})
            })      
            setDataDb(scammers)
        })
    }

    useEffect(() => {
        onLoadData()  
    }, []);

    //handling Delete
    const handleDelete = async (id) => {
        await barawos.doc(id).delete();
    };

    //handling update
    const handleUpdate = async (id) => {
        await barawos.doc(id).update({

        });
    };

    return (
        <div>
            <div> <h1> Search a Scammer </h1>  </div>
            <form>
                <div> <input autoComplete="off" onChange={handleSearch} value={search} name="search" className="input-search" type="number" placeholder="Search for an Account number.." /> </div>
                <div> <button onClick={handleClick} style={{ ...btnStyle, backgroundColor: "red" }} className="btn" type="submit"> SEARCH </button> </div>
            </form>
            <hr />

            {onload && <div>
                {dataDb.map((data) => {
                    return (
                        <div key={data.key}>
                        <h3>{data.name}</h3>
                        <p>Bank: {data.bank}</p>
                        <p>Account: {data.account}</p>
                        <p>Phone: {data.phone}</p>
                        <p>Amount: {data.amount}</p>
                        <p> <i>  We are doing our best to get this scammer tracked and funds refunded </i></p>
                            <div> <button onClick={() => {
                                handleUpdate(data.id)
                           }}> Edit </button></div>  
                            <div> <button onClick={() => {
                                handleDelete(data.id)
                           }}> Delete </button></div>  
                        </div>
                    )
                })}
            </div>}

            {onSearch && <div>
                <h1> Found Scammers </h1>
                {foundScammer.map((data) => {
                    
                    return (<div>
                            {console.log("me")}
                        <h2>Name: {data.name}</h2>
                        <p>Bank: {data.bank}</p>
                        <p>Account: {data.account}</p>
                        <p>Phone: {data.phone}</p>
                        <p>Amount: {data.amount}</p>
                        <p> We are doing our best to get this scammer tracked and funds refunded</p>
                        </div>
                    )
                })}
            </div>}

        </div>
    )
}

export default Read
