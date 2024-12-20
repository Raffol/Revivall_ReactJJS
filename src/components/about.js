import React from 'react';

function AboutUs() {
    return (
        <section style={{ margin: '55px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '50px' }}>О нас</h2>
            <p style={{ fontSize: '20px', textAlign: 'center' }}>
                Иркутская региональная общественная организация по сохранению и развитию этнокультурного наследия “Возрождение”
            </p>
            <br />
            <p style={{ fontSize: '20px', textAlign: 'center' }}>
                Организация занимается реализацией и проведением фестивалей этнокультурной направленности, с целью возрождения,
                развития и сохранения культуры Иркутской области.
            </p>
            <br />
            <img
                style={{ height: '550px', width: '800px', marginLeft: '265px' }}
                src="/img/kW-Jf8XYj6A.jpg"
                alt=""
            />
        </section>
    );
}

export default AboutUs;
