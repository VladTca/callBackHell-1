import React, { useState } from 'react';
import Component2 from './Component2';

interface Component1Props {
OnCallback: () => void;
}

const Component1: React.FC<Component1Props> = ({OnCallback}) => {
    const [isGreen, setIsGreen] = useState(false);

    const OnHandler5 = () => {
        setIsGreen(true);
    }
    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component2 onCallback={OnHandler5}  />
        </div>
    );
};

export default Component1;