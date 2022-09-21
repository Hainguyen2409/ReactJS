import { useState, useEffect } from "react";
import React from "react";

export const EffectDemo = () => {
    const [fullName, setFullName] = useState( { name: 'name', familyName: 'family'});
    const [title, setTitle] = useState('UseEffectQ in Hooks');

    //useEffect
    useEffect(() => {
        console.log('useEffect called');
        setFullName({ name: 'hai', familyName: 'Nguyen'});
    },[fullName.name]);

    return (
        <div>
            <h1>Title: {title} </h1>
            <h2>Name: {fullName.name}</h2>
            <h3>FamilyName: {fullName.familyName}</h3>
        </div>
    )
}