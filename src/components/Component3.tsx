import React, { useState } from 'react';
import Component4 from './Component4';

interface Component3Props {
    onCallback: () => void;

}

const Component3: React.FC<Component3Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const OnHandler5 = () => {
        onCallback();
        setIsGreen(true);
    }
    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component4 onCallback={() => setInterval(OnHandler5, 1000)}  />
        </div>
    );
};

export default Component3;