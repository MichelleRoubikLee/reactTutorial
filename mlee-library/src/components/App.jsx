import React, {Component} from "react";
import "./App.css"
import TitleBar from "./TitleBar/TileBar";

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: 'Ready Player One', author: 'Ernest Cline'},
            {title: 'All the Light We Cannot See', author: 'Anthony Doerr'},
            {title: 'The First and Last Freedom', author: 'Jiddu Krishnamurti'},
        ];
        this.state = {
            bookNumber: 0
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <div className="row row-spacer">
                <div className="col">
                    {/*Button here to move to the previous book viewed*/}
                </div>
                <div className="col">
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                <div className="col">
                    {/*Button here to move to the previous book viewed*/}
                </div>
</div>

            </div>
        )
    }
}

export default App;