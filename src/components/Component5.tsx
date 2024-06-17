import {useState} from 'react';
import React from 'react';
import './../App.css';

interface Component5Props {
    onCallback: () => void;
}

const Component5: React.FC<Component5Props> = ({onCallback}) => {
    const [isGreen, setIsGreen] = useState(false);
const OnHandler5 = () => {
    setIsGreen(true);
    // onCallback();
}

    return (


        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <button onClick={OnHandler5}>Complete Chain</button>
        </div>
    );
};

export default Component5;