
import React, { useState } from "react";
import logo from "../../src/asset/logo.PNG"
import Submit from "./Submit";
import Read from "./Read";
import HomeBtn from "./HomeBtn";



const Home = () => {

    const [home, setHome] = useState(true)
    const [search, setSearch] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async () => {
        setSubmit(true)
        setSearch(false)
        setHome(false)
    }

    const handleSearch = () => {
        setSearch(true)
        setSubmit(false)
        setHome(false)
    }

    return (
        <div className="App" style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/always-grey.png')",
            maxWidth: "100%",
            height: "auto"
        }}>
            <div>
                    <div>
                        <div>
                            <img src={logo} alt= "barawo logo" width= "120px" height= "120px" />
                        </div>
                        <div style={{
                            fontSize: "7.5vh",
                            fontWeight: "bold",
                            fontFamily: "Charmonman",
                            color: "Teal",
                            marginTop: "20px"
                        }}> Barawo.com </div>
                    </div>
            </div>
            
            <div style={{
                width: "70%",
                margin: "60px auto 100px",
                flexWrap: "wrap"
            }}>
                        {home && <HomeBtn
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
            /> }
            </div>

            
            <div >
                
                {search &&  <Read />}
                {submit && <Submit /> }
            </div>
        </div>
    )
}

export default Home
