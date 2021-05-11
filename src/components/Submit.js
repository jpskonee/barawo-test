import React, {useState} from 'react'
import { app } from "../base.js"
import firebase from "firebase";

import "../App.css"


const barawos = app.firestore().collection("barawos");



const btnStyle = {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    color: "white",
    fontSize: "20px",
    }

const Submit = () => {

    const [scammer, setScammer] = useState("")
    const [amount, setAmount] = useState("")
    const [bank, setBank] = useState("")
    const [account, setAccount] = useState("")
    const [phone, setPhone] = useState("")
    const [details, setDetails] = useState("")
    const [count, setCount] = useState(0)


    const handleScammerC = (event) => {
        setScammer(event.target.value)
    }
    const handleAmountC = (event) => {
        setAmount(event.target.value)
    }
    const handleBankC = (event) => {
        setBank(event.target.value)
    }
    const handleAccountC = (event) => {
        setAccount(event.target.value)
    }
    const handlePhoneC = (event) => {
        setPhone(event.target.value)
    }
    const handleDetailsC = (event) => {
        setDetails(event.target.value)
    }

    const handleClick = (event) => {

        const addData = async () => {
            const newCount = setCount(count + 1)
            await barawos.doc().set({
                key: `BRW${Date.now().toString()}${Math.floor(Math.random() * 1000)}`,
                name: scammer,
                amount: amount,
                bank: bank,
                account: account,
                phone: phone,
                details: details,
                count: count + 1,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            })

            setScammer("")
            setAccount("")
            setAmount("")
            setBank("")
            setDetails("")
            setPhone("")
        }
        addData();
        event.preventDefault();
    }


    return (
        <div>
            <hr />
            
             <div>
                <form >
                    <div> <h1> Submit a Scammer </h1> </div>
                    
                   <div>  <input onChange={handleScammerC}  name="scammer" value={scammer} autoComplete="off"  className="input-search"  type="text" placeholder="Whats the name of the scammer?" autoFocus /> </div>
                    
                    <div> <input onChange={handleAmountC} name="amount" value={amount} autoComplete="off" className="input-search" type="number" placeholder="How much where you scammed?" /> </div> 
                    
                    <div> <input onChange={handleBankC} name="bank" value={bank} autoComplete="off" className="input-search" type="text" placeholder="What Bank did you pay into?" /> </div>
                    
                    <div> <input onChange={handleAccountC} name="account" value={account} autoComplete="off" className="input-search" type="number" placeholder="Bank Account number" /> </div>
                    
                    <div> <input onChange={handlePhoneC} name="phone" value={phone} autoComplete="off" className="input-search" type="number" placeholder="Scammers Phone Number" /> </div>
                    
                   <div>  <textarea onChange={handleDetailsC} name="details" value={details} autoComplete="off" className="input-search" placeholder="Details of transaction.." />  </div>
                    
                    <div><button
                        style={{ ...btnStyle, backgroundColor: "red" }}
                        className="btn" type="submit"
                        onClick={handleClick}
                    > SUBMIT </button> </div>
                </form>
            </div>
            
        </div>
    )
}

export default Submit
