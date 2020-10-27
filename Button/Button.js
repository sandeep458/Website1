import React from 'react'
import'./Button.css';

function Button() {
    return (
        <div className="container">
                    <div className="container-a">
                    <button className="button-a">Previous</button>
                    </div>
                            <div className="container-b">
                                <div className="undefined btn" id="activeBtn">
                                    <p>1</p>
                                </div>
                                <div className="undefined btn" >
                                    <p>2</p>
                                </div>
                                <div className="undefined btn">
                                    <p>3</p>
                                </div>
                                <div className="undefined btn">
                                    <p>4</p>
                                </div>
                            </div>
                            <div className="container-c">
                            <button className="button-f">Next Page</button>
                            </div>
        </div>
    )
}

export default Button
