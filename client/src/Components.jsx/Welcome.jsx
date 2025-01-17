import React, { useContext } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import { transactionContext } from '../contexts/transactionContext.jsx';
import { shortenaddress } from '../utils/shortenAddress.js';
import Loader from "./Loader";


const commonstyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none
  text-sm white-glassmorphism'
    />
)



const Welcome = () => {

const { connectWallet, connectedAccount, formData, sendTransaction, handleChange }  = useContext(transactionContext);


    const handleSubmit =(e)=>{

        const {addressto, amount, keyword, message} = formData;
        e.preventDefault();

        if(!addressto || !amount || !keyword || !message) return;

        sendTransaction();

    }

    


    return (
        <div className='flex w-full justify-center items-center py-10'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Send Crypto <br /> across the World
                    </h1>


                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Explore the Crypto World. Buy and sell cryptocurrencies easily using SyCripto.
                    </p>


                    {!connectedAccount && (<button
                        type='button'
                        onClick={connectWallet}
                        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                    >
                        <p className='text-white textbase font-semibold '>ConnetWallet</p>
                    </button>)}

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonstyles}`}>Reliability</div>
                        <div className={` ${commonstyles}`}>Security</div>
                        <div className={`rounded-tr-2xl ${commonstyles}`}>Ethereum</div>
                        <div className={`rounded-bl-2xl ${commonstyles}`}>Web 3.0</div>
                        <div className={` ${commonstyles}`}>Low Fees</div>
                        <div className={`rounded-br-2xl ${commonstyles}`}>BlockChain</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt:0 mt-10'>
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
                        <div className='flex ju flex-col w-full h-full'>
                            <div className='flex justify-between items-start'>
                                <div className='w-10 h-10 rounded-full border-2 border-white justify-center items-center'>
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>

                            <div>
                                <p className='text-white font-white text-sm'>
                                    {shortenaddress(connectedAccount)}
                                </p>
                                <p className='text-white font-gray text-lg'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>

                        <Input placeholder="Address To" name="addressto" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount [Eth]" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />


                        <div className='h-[1px] w-full bg-gray-400 my-2'/>

                        {false ? (<Loader/>) : (<button 
                                                type='button' 
                                                onClick={handleSubmit}
                                                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] cursor-pointer hover:bg-sky-700'>
                                                    Send Now
                                                </button>)}

                </div>
        </div>
</div>
    )
    
}

export default Welcome
