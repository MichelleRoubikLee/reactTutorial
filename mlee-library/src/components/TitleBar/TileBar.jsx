import React from "react";
import "./TitleBar.css"

function TitleBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{ padding: 0 }}>
                <div className="titlebar-nav">
                    <h1>MLee Library</h1>
                </div>
            </div>
        </div>
    )
}
export default TitleBar;