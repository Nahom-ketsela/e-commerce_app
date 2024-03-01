    import React from 'react';
    import './Categories.css';
    import tvStand from '../assets/tvStand.jpg';
    import kitchen6 from '../assets/kitchen6.jpeg';
    import bed4 from '../assets/bed4.jpg';
    import outdoor from '../assets/outdoor.jpg';
    import sofa from '../assets/sofa.jpg';
    import sofa3 from '../assets/sofa3.jpg';
    import table4 from '../assets/table4.jpg';
    import tv from '../assets/tv.jpg';

    const Categories = () => {
    return (
        <div>
        <section>
            <div className="title">
            <p><span>Navigate to our categories</span><br />To build your base</p>
            </div>

            <div className="whole">
            <div className="container">
                <div className="images">
                <img src={tvStand} alt="" />
                </div>
                <div className="number">
                <p>01</p>
                </div>

                <div>
                <h2>living room furniture</h2>
                </div>
                <div className="para">
                <p>
                    This is a place where you should feel comfortable, so it’s
                    important to have the right furniture and accessories to make it
                    comfortable and functional.
                </p>
                </div>
            </div>

            <div className="container">
                <div className="images">
                <img src={kitchen6} alt="" />
                </div>
                <div className="number">
                <p>02</p>
                </div>
                <div>
                <h2>Kitchen essentials</h2>
                </div>
                <div className="para">
                <p>
                    This is a place where you should feel comfortable, so it’s
                    important to have the right furniture and accessories to make it
                    comfortable and functional.
                </p>
                </div>
            </div>
            <div className="container">
                <div className="images">
                <img src={bed4} alt="" />
                </div>
                <div className="number">
                <p>03</p>
                </div>
                <div>
                <h2>Bedroom Furnitures</h2>
                </div>
                <div className="para">
                <p>
                    This is a place where you should feel comfortable, so it’s
                    important to have the right furniture and accessories to make it
                    comfortable and functional.
                </p>
                </div>
            </div>
            <div className="container">
                <div className="images">
                <img src={outdoor} alt="" />
                </div>
                <div className="number">
                <p>04</p>
                </div>
                <div>
                <h2>Out door essentials</h2>
                </div>
                <div className="para">
                <p>
                    This is a place where you should feel comfortable, so it’s
                    important to have the right furniture and accessories to make it
                    comfortable and functional.
                </p>
                </div>
            </div>
            </div>
        </section>
        <section className="whole-1">
            <img src={sofa} alt="" />
            <div className="items-1">
            <div>
                <h2>
                <span className="p-1">Explore our different </span><br />item categories
                </h2>

                <p>
                We offer a wide range of furniture items that cater to your needs
                and preferences. Our collection includes furniture for your living
                room, bedroom, dining room, home office, and outdoor spaces.
                </p>
                <button type="submit" className="explore">EXPLORE</button>
            </div>
            </div>
        </section>

        <section>
            <div className="title">
            <p><span>New</span><br />Arrivals</p>
            </div>
            <div className="whole">
            <div className="container">
                <div className="jpg">
                <a href="#">
                    <img src={sofa3} alt="" />
                    <p>
                    Blueblack Sofa <br /><span>Price: 44,999 birr </span>
                    </p>
                </a>
                </div>
            </div>
            <div className="container">
                <div className="jpg">
                <a href="#">
                    <img src={table4} alt="" />

                    <p>
                    Table <br /><span>Price: 4,999 birr </span>                
                    </p>
                </a>
                </div>
            </div>
            <div className="container">
                <div className="jpg">
                <a href="#">
                    <img src={tv} alt="" />

                    <p>
                    Full living Room furnitures<br /><span>Price: 59,999 birr</span>
                </p>
                </a>
                </div>
            </div>
            </div>
            <div className="title">
            <p><span>Our</span><br /> Popular Products</p>
            </div>
        </section>
        </div>
    );
    }

    export default Categories;
