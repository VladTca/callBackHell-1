import React, { useState } from 'react';
import Component5 from './Component5';

interface Component4Props {
    onCallback: () => void;
  }

const Component4: React.FC<Component4Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const OnHandler5 = () => {
        onCallback();
        setIsGreen(true);
    }


    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component5 onCallback={OnHandler5}  />
        </div>
    );
};

export default Component4;