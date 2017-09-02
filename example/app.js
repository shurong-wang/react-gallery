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
                thumbnailLabel: '缩略图1',
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Custom class for slides & thumbnails'
            },
            {
                thumbnail: `${PREFIX_URL}3v.jpg`,
                thumbnailLabel: '缩略图3',
                original: `${PREFIX_URL}3v.jpg`,
                description: 'Render custom slides within the gallery'
            },
            {
                thumbnail: `${PREFIX_URL}4v.jpg`,
                thumbnailLabel: '缩略图4',
                original: `${PREFIX_URL}4v.jpg`
            }
        ].concat(this.getImages());
    }

    componentDidUpdate(prevProps, prevState) {}

    onImageClick(event) {
        console.debug('clicked on image', event.target);
        console.debug('at index', this._imageGallery.getCurrentIndex());
    }

    onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    onSlide(index) {
        console.debug('slid to index', index);
    }

    getImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: <div className='item-content'>{`${PREFIX_URL}${i}.jpg`}</div>,
                thumbnail: `${PREFIX_URL}${i}t.jpg`,
                thumbnailLabel: `缩略图${i}`
            });
        }

        return images;
    }

    render() {
        return (
            <section className='app'>
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    defaultImage={''}
                    items={this.images}
                    showIndex={true}
                    showBullets={true}
                    lazyLoad={false}
                    onClick={this.onImageClick.bind(this)}
                    onImageLoad={this.onImageLoad}
                    onSlide={this.onSlide.bind(this)}
                />
            </section>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);
