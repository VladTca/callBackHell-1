import React, { useState } from 'react';
import Component2 from './Component2';

interface Component1Props {
onCallback: () => void;
}

const Component1: React.FC<Component1Props> = ({onCallback}) => {
    const [isGreen, setIsGreen] = useState(false);

    const OnHandler5 = () => {
        onCallback();
        setIsGreen(true);
    }
    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component2 onCallback={() => setInterval(OnHandler5, 1000)}  />
        </div>
    );
};

export default Component1;