import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    });

    const fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        console.log(values);
        setValues(values.data);
    }

    const fetchIndexes = async () => {
        const seenIndexes = await axios.get('/api/values/all');
        console.log(seenIndexes);
        setSeenIndexes(seenIndexes.data);
    }

    const renderSeenIndexes = () => {
        return seenIndexes.map(({ number }) => {
            return number
        }).join(', ');
    };

    const renderValues = () => {
        const entries = [];

        for (let key in values) {
            entries.push(
                <div key={key}>
                    For Index {key} I Calculated {values[key]}
                </div>
            );
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/values', {
            index: index
        });

        setIndex('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter you Index:</label>
                <input
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                />
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen:</h3>
            {renderSeenIndexes}
            <h3>Calculated Values:</h3>
            {renderValues}
        </div>
    );
}

export default Fib;