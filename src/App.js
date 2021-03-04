import React from "react"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component{

  constructor(props){
    super(props)

    this.state={lat:null,errMsg:""}

    
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=>this.setState({lat:position.coords.latitude}),
      err=>this.setState({errMsg:err.message})
    );
  }

  renderContent(){
    if(!this.state.errMsg && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    
    if(this.state.errMsg && !this.state.lat){
      return <h2>{this.state.errMsg}</h2>
    }
    return <Spinner msg="Please accept location request"/>
  }
  
  render(){      
    
    return(
      <div className="border red">
        {this.renderContent()}
      </div>


    )
  }
}


export default App;
