import React, {Component} from 'react';
import Images from './Images'
import Pages from './Pages'

class Result extends Component{

    showImages = () =>{
        const images = this.props.images; 

        if(images.length === 0 )return null;

        return(
            < React.Fragment>
                 <div className="col-12 p-5 row">
                    {images.map( imageData => (
                        < Images 
                            key={ imageData.id}
                            imageData={ imageData }
                        />   
                    ))}
                 </div>
                 <Pages 
                    previousPage={ this.props.previousPage}
                    nextPage={ this.props.nextPage}
                 />
            </React.Fragment>
        );
       
    }


    render(){
        return(
            < React.Fragment>
                { this.showImages() }
            </React.Fragment>
        );
    }
}

export default Result;