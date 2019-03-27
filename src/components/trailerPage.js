import React, { Component } from 'react';


class TrailerPage extends Component {
    render() {
        const { match: { params } } = this.props;
        const urlDecode = decodeURIComponent(params.url);
        return (
            <div className='trailer'>
                <iframe className='trailer__movie' width="100%" height="100%" src={`${urlDecode}`} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="">
                </iframe>
            </div>
        );
    }
}
<<<<<<< HEAD
export default TrailerPage;
=======
export default TrailerPage;
>>>>>>> 57447ff544ce2c9c2dbb81748b5da2940cdb6317
