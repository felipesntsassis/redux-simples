import React from 'react';

import Card from './Card';

export default function Soma(props) {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    );
}