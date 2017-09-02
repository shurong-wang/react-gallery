import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from '../src/ImageGallery';
const PREFIX_URL = './images/';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        };

        this.images = [
            {
                original: `${PREFIX_URL}1.jpg`,
                thumbnail: `${PREFIX_URL}1t.jpg`,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Custom class for slides & thumbnails'
            },
            {
                thumbnail: `${PREFIX_URL}3v.jpg`,
                original: `${PREFIX_URL}3v.jpg`,
                description: 'Render custom slides within the gallery'
            },
            {
                thumbnail: `${PREFIX_URL}4v.jpg`,
                original: `${PREFIX_URL}4v.jpg`
            }
        ].concat(this._getStaticImages());
    }

    componentDidUpdate(prevProps, prevState) {

    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        console.debug('slid to index', index);
    }

    _getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({original: `${PREFIX_URL}${i}.jpg`, thumbnail: `${PREFIX_URL}${i}t.jpg`});
        }

        return images;
    }

    render() {
        return (
            <section className='app'>
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    items={this.images}
                    showIndex={true}
                    showBullets={true}
                    lazyLoad={false}
                    onClick={this._onImageClick.bind(this)}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                />
            </section>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('container')
);
