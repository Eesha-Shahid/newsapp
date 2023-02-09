import './App.css'

import React, {Component} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component{
  pageSize = 5;
  apiKey = "0815e543b55541d5a9b07b379b2674a0";
  
  state = {
    progress:0
  }

  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }

  render(){
    return(
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}/>
          <Routes>
            <Route exact path ="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
            <Route exact path ="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}/>
            <Route exact path ="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route exact path ="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
            <Route exact path ="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
            <Route exact path ="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}/>
            <Route exact path ="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}/>
          </Routes>
        </Router>
      </div>

      // <Router>
      // <Navbar title="Text Utils" aboutText="About Cosmic Cafe" mode={mode} toggleMode={toggleMode}/>
      // <Alert alert={alert}/>
      // <div className="container my-3">
      //   <Routes>
      //       <Route exact path ="/about" element={<About mode={mode}/>}/>
      //       <Route exact path ="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
      //   </Routes>
      // </div>
      // </Router>
    )
  }
}
