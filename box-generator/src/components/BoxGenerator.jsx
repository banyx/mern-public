import React, { useState } from 'react'

const BoxGenerator = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color) {
            setBoxes([...boxes, color]);
            setColor('');
        }
    };

    return (
        <div>
            <h1 className="my-3">Box Generator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorInput">Color:</label>
                <input type="text" id="colorInput" value={color} onChange={handleColor}
                />
                <button className="btn btn-outline-primary mx-3 my-3" type="submit">Add</button>
            </form>
            <div>
                {boxes.map((boxColor, i) => (
                    <div key={i} style={{ width: '100px', height: '100px', backgroundColor: boxColor, display: 'inline-block',}} className="mx-3 my-3"></div>
                ))}
            </div>
        </div>
    );
};

export default BoxGenerator;