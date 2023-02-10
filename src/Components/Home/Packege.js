import React from 'react';
import { FiMenu } from 'react-icons/fi';
import travel from "../../asset/photo-1528127269322-539801943592.avif";

const Packege = ({food,transport,shareRome,setShow,gari}) => {
    return (
        <div className='w-6/12'>
           <div className="border bg-white w-full rounded-md py-4 px-6 shadow-md">
            <h2>Group Packege</h2>
            <p>Suituble for 10</p>
            <div className="flex justify-between mt-2 items-start gap-x-6 h-full w-full">
                <div className="h-full ">
                    <img className='img-fluid w-full h-full rounded-md' src={travel} alt="" />
                </div>
                <div className="flex flex-col w-full gap-2 h-full">
                    <div  className="border p-2 rounded  relative">
                      <div className="">
                      <p>Food: included</p>
                        <p>Rome type: shared</p>
                        <p>Transport : Chander Gari</p>
                      </div>
                      <span  onClick={() => setShow(true)} className='absolute top-2 right-2 cursor-pointer'><FiMenu/></span>
                    </div>
                    <div className="border p-2 rounded">
                        <p>Food: included</p>
                        <p>Rome type: shared</p>
                        <p>Transport : Chander Gari</p>
                    </div>
                    <div className="flex justify-center items-center mx-auto flex-col">
                        <p>Price per person:</p>
                        <p>{1000 + (shareRome + transport + (food !== 50 && food) - (food === 50 && food) + (gari && 1000))} BDT</p>
                    </div>
                    <div className="border">
                        <div className="flex justify-center items-center ">
                            <div className="flex-none w-10 border">
                                +
                            </div>
                            <div className="grow mx-auto flex justify-center">
                                <p className='flex justify-center items-center flex-col'>Add Packege <span>(0 Selected)</span></p>
                                
                            </div>
                            <div className="flex-none border w-10">
                               -
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Packege;