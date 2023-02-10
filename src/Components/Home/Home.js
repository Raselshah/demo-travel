import React, { useState } from 'react';
import Packege from './Packege';
import UpdateAmmount from './UpdateAmmount';

const Home = () => {
    const [shareRome, setShareRome] = useState(0);
    const [transport, setTransport] = useState(0);
    const [food, setFood] = useState(0);
    const [gari, setGari] = useState(false)

    const [show, setShow] = useState(false);
    return (
        <div className='flex justify-between items-center w-full px-12 h-screen gap-12'>
            <Packege shareRome={shareRome} transport={transport} food={food} setShow={setShow} gari={gari} />
            {
            show && <UpdateAmmount setShow={setShow} setShareRome={setShareRome} shareRome={shareRome} setTransport={setTransport} transport={transport} setFood={setFood} food={food} setGari={setGari} gari={gari} />
            }
             
           
        </div>
    );
};

export default Home;