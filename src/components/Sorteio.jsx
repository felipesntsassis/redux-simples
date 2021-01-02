import React from 'react';

import Card from './Card';

export default function Sorteio(props) {
    const { min, max } = props;
    const sorted = parseInt(Math.random() * (max - min)) + min;

    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{sorted}</strong>
                </span>
            </div>
        </Card>
    );
}
