import React, { useState } from 'react';
import Component3 from './Component3';

interface Component2Props {
    onCallback: () => void;
  }

const Component2: React.FC<Component2Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);
    const OnHandler5 = () => {
        onCallback();
        setIsGreen(true);
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component3 onCallback={OnHandler5}  />
        </div>
    );
};

export default Component2;