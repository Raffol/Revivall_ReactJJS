import React from 'react';

function NewsFeed() {
    const news = [
        {
            id: 1,
            title: "22 августа 2024 года: Традиционные спортивные соревнования собрали рекордное количество участников",
            content: "Сегодня на Бурятских играх стартовали традиционные соревнования по национальной борьбе «Бухэ барилдаан». В этом году в турнире приняли участие более 500 борцов из разных районов республики, а также гости из соседних регионов. Жители и гости города с интересом наблюдают за схватками на арене."
        },
        { id: 2, title: "...", content: "..." }, // Добавьте больше новостей
    ];

    return (
        <section id="newsfeed" style={{ display: 'flex', gap: '15px', margin: '30px' }}>
            {news.map((item) => (
                <div key={item.id} style={{ margin: '50px' }}>
                    <p style={{ textAlign: 'center' }}>-{item.id}-</p>
                    <h3>{item.title}</h3>
                    <hr />
                    <p>{item.content}</p>
                </div>
            ))}
        </section>
    );
}

export default NewsFeed;
