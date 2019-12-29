import React from 'react';
import Searcher from './Components/Searcher';
import Result from './Components/Result';


class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      data: '',
      images: [],
      page: ''
    };
  }

  scroll = () =>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');

  }

  previousPage = () =>{
    let page = this.state.page;
    if( page === 1 )
      return null;

    page = page - 1;
    this.setState({
      page
    }, () => { 
      this.consultAPI();
      this.scroll();
    });
  }

  nextPage = () => {
    let page = this.state.page;
    
    page = page + 1;
    this.setState({
      page
    }, () => { 
      this.consultAPI();
      this.scroll();
    });

  }

  consultAPI = () => {
    const data = this.state.data;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=14764632-f455b787711604c8290a90b6a&q=${data}&page=${page}`;

    fetch(url)
          .then( ans => ans.json())
          .then( res => this.setState({
              images: res.hits
            })
          )
  }

  searchData = (data) => {
    this.setState({
      data: data, 
      page: 1
    }, () =>{
      this.consultAPI();
    });

  }


  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image Searcher</p>
          < Searcher 
            searchData={ this.searchData}
          />
        </div>
        <div className="row justify-content-center">
          < Result
            images={this.state.images} 
            previousPage={ this.previousPage}
            nextPage={ this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
