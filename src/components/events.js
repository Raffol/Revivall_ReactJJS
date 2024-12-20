import React from 'react';

function Events() {
    const events = [
        ["Этнофест \"III Убэлэй буряад арадай наадан\"", "Этнофест \"I Хабарай буряад арадай наадан\"", "Праздник \"Сур-Харбан\""],
        ["Этнофест \"I Летние народные бурятские игры\"", "Этнофест \"I Намарай буряад арадай наадан\"", "Лаборатория \"Прожектор\""],
        ["Турнир \"Шагай Наадан\"", "Концерт ансамбля \"АЯНГА\"", "Этнофест \"IV Убэлэй буряад арадай наадан\""],
    ];

    return (
        <section>
            <h2 style={{ textAlign: 'center', fontSize: '50px' }}>Наши мероприятия</h2>
            <table style={{ margin: '30px', padding: '20px' }}>
                {events.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((event, colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', border: '1px solid black' }}>
                                {event}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </section>
    );
}

export default Events;
