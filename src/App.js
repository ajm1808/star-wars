import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state ={
    quote:"",
  }

  componentDidMount(){
   this.handleFetchRequest()
  }

  handleFetchRequest=()=>{
    fetch(
      "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
    )
      .then((response)=> response.json())
      .then((data)=>this.setState({quote: data.starWarsQuote}))
  }

  render (){
    return(
      <div className="App">
        <img className="img"
        alt="Maul"
        src="https://cdn.collider.com/wp-content/uploads/2020/04/clone-wars-season-7-episode-10-images-maul-scaled.jpeg"
        />
        <h3>a random star wars quote</h3>
        <hr />
        <h1>{this.state.quote && this.state.quote.toLowerCase()}</h1>
        <button onClick={this.handleFetchRequest} >new quote</button>
      </div>
    )
  }
}

export default App;