import React from 'react';
import "../App.css"



const btnStyle = {
    width: "17vh",
    height: "7.5vh",
    borderRadius: "10px",
    color: "white",
    fontSize: "20px",
 
    }

const HomeBtn = (props) => {
    return (
        <div>
            <div >
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                  <button
                        onClick={props.handleSearch}
                        className="btn"
                        style={{
                            ...btnStyle, backgroundColor: "teal"
                        }}
                        
                    > Search </button>
            
                    <button
                        onClick={props.handleSubmit}
                        className="btn"
                        style={{ ...btnStyle, backgroundColor: "orange", }}
                    > Submit </button>
               
                </div>
            </div>
        </div>
    )
}

export default HomeBtn
