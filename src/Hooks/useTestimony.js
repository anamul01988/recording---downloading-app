import { useEffect, useState } from 'react';

const useTestimony = () => {
    const [testimony, setTestimony] =useState();
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data =>setTestimony(data))
    },[]);
    return [testimony, setTestimony];
};

export default useTestimony;