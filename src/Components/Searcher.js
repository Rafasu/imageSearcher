import React, {Component} from 'react';

class Searcher extends Component{

    searchRef = React.createRef(); 

    handleSearch = (e) => {

        e.preventDefault();
        //Takes input and sends it to App Component through props.
        this.props.searchData(this.searchRef.current.value);

    }

    render(){
        return(
            <form onSubmit={ this.handleSearch}>
                <div className="row"> 
                    <div className="form-group col-md-8">
                        <input ref={ this.searchRef } type="text" 
                        className="form-control form-control-lg" placeholder="Search Image"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-success btn-block" value="Search"/>
                    </div>
                </div>

            </form>

        );
    }

}

export default Searcher;