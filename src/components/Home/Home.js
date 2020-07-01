import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const tileData = [
    {
        img: 'https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_960_720.jpg',
        title: 'lorem epsum',
        author: 'author'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/12/01/06/38/texture-1874557_960_720.jpg',
        title: 'epsum lorem ',
        author: 'author'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg',
        title: 'loreem epsss',
        author: 'author'
    }
];

const Home = () => {
    return (
        <>
            <Carousel>
                {tileData.map((c) => (
                    <Carousel.Item>
                        <img className='d-block w-100' src={c.img} alt={c.title} />
                        <Carousel.Caption>
                            <h3>{c.title}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <section className='home-section--features container'>
                <div className='features-wrapper py-5'>
                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quasi.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quasi.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 3</h4>
                        <p>Sint ratione, vel doloribus quis minus quos provident. Excepturi, quasi.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 4</h4>
                        <p>
                            Cupiditate dolorem, pariatur unde sequi laudantium deserunt quo animi sit modi iure sint
                            ratione, vel doloribus quis minus quos provident.
                        </p>
                    </div>

                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 5</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quasi.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='card-icons' />

                        <h4>Feature 6</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem, pariatur unde
                            sequi.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
