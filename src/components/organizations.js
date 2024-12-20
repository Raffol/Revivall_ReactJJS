import React from 'react';

function Organizers() {
    const members = [
        { id: 1, name: "Иванов Иван Иванович", role: "Председатель совета и организации" },
        { id: 2, name: "Антонов Антон Антонович", role: "Менеджер по работе с волонтёрами" },
        { id: 3, name: "Игорев Игорь Игоревич", role: "Пресс-служба" },
    ];

    return (
        <section id="organizerss">
            <p style={{ textAlign: 'center', fontSize: '50px' }}>
                Организационный комитет общественной организации
            </p>
            {members.map((member) => (
                <div key={member.id} style={{ display: 'flex', gap: '10px', margin: '20px' }}>
                    <img
                        src="/img/1731650085.jpg"
                        alt=""
                        style={{ width: '100px', height: '100px' }}
                    />
                    <div>
                        <h2>{member.name}</h2>
                        <p style={{ fontSize: '18px' }}>{member.role}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Organizers;
