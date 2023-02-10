import React from "react";
import "../../App.css";
const UpdateAmmount = ({setGari,gari, setShareRome,setShow, shareRome,setTransport,transport,food,setFood }) => {
  return (
    <div className="w-6/12 border rounded-md bg-white shadow-md py-6 px-4 relative">
     <p onClick={() => setShow(false)} className="absolute cursor-pointer top-3 right-5 text-red-500">X</p>
         <div className="grid grid-cols-2 justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h2 className="text-lg font-semibold mb-1 ml-6"> Update Rome</h2>
              <div className="flex justify-start items-center gap-x-3">
                {shareRome === 0 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
    
                <button onClick={() => setShareRome(0)}>Shared Rome + 0 BDT</button>
              </div>
    
              <div className="flex justify-start items-center gap-x-3">
              {shareRome === 500 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button onClick={() => setShareRome(500)}>Private Rome + 500 BDT</button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h2 className="text-lg font-semibold mb-1 ml-6"> Update Transport</h2>
    
              <div className="flex justify-start items-center gap-x-3">
              {transport === 0 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button onClick={() => setTransport(0)}>Chander Gari + 0 BDT</button>
              </div>
    
              <div className="flex justify-start items-center gap-x-3">
              {transport > 499 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button  onClick={() => setTransport(500)}>CNG + 500 BDT</button>
              </div>
    
              <div className="flex justify-start items-start gap-x-2">
              {gari === true ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button onClick={() => setGari(!gari)}>Add transport to khagrachori + 1000 BDT</button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h2 className="text-lg font-semibold mb-1 ml-6"> Update Food</h2>
    
              <div className="flex justify-start items-center gap-x-3">
              {food === 0 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button onClick={() => setFood(0)}>Included + 0 BDT</button>
              </div>
    
              <div className="flex justify-start items-center gap-x-3">
              {food === 50 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button  onClick={() => setFood(50)}>Excluded - 50 BDT</button>
              </div>
    
              <div className="flex justify-start items-center gap-x-3">
              {food === 100 ? (
                  <div className="w-5 h-5 rounded-full border bg-green-500"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border"></div>
                )}
                <button  onClick={() => setFood(100)}> Chavir and Shirims + 100 BDT</button>
              </div>
            </div>
          </div>
     
    </div>
  );
};

export default UpdateAmmount;
