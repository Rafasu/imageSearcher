import React from 'react';

const Images = (props) => {
    
    const {largeImageURL, likes, previewURL, tags, views} = props.imageData;

    return(
        <div className="col-12 col-md-4 mb-4">
            <div className="card">
                <img src={ previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text"> { likes} Likes</p>
                    <p className="card-text"> { views} Views</p>

                    <a href={largeImageURL} targe="_blank" className="btn btn-primary btn-block">
                        View Image
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Images;