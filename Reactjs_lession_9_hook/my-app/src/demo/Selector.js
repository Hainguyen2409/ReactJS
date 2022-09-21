import { useState, useEffect } from 'react';

export default function Selector() {
    const [valueSelected, setValueSelected] = useState('');
    const [selected, setSelected] = useState(0);
    let programmingLanguage = ['java', 'Angular', 'javascript', 'PHP'];
    const choice = (e) => {
        setSelected(e.target.value);
    }

    useEffect(() => {
        setValueSelected(programmingLanguage[selected]);
    }, [selected]);

    return(
        <div className="container">
            Khóa học : 
            <select onChange={e => { choice(e)}}>
                {
                    programmingLanguage.map((language,index) => (
                        <option value={index} key={index}>{language}</option>
                    ))
                }
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    )
}