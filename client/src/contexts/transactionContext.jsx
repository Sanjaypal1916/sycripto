import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { contractABI, contractAddress } from '../utils/constants';

export const transactionContext = React.createContext();



const { ethereum } =window;

// window.ethereum

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI, signer);


    console.log(
        provider,
        signer,
        transactionContract
    );

    return transactionContract;

}


export const TransactionProvider = ({children})=>{

    
const [connectedAccount, setConnectedAccount]= useState('');
const [formData, setFormData] = useState({addressTo: "", amount: "" , keyword: "", message:""});
const [loading, setLoading] = useState(false);
const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount')); //instead of putting 0 store it there to keep a track over tramsaction count

const handleChange= (e, name)=>{
        setFormData((prevState)=>({ ...prevState, [name]: e.target.value})); //related to adv react functions
        }

        
const getAllTransactions =  async()=>{
    try {
        if(!ethereum) return alert("please install metamask");
    const transactionContract = getEthereumContract();
    const availabletranscation = await transactionContract.getAllTransaction();

    console.log(availabletranscation);
    } catch (error) {
        console.log(error)
    }
}


    const checkidwalletisconnected = async()=>{
        try {
            if(!ethereum){ return alert("please install metamask");}
            const accounts = await ethereum.request({method : "eth_accounts"});
            console.log(accounts);
        
            if(accounts.length){
                setConnectedAccount(accounts[0]);
                getAllTransactions();
//getalltransactions
            }else{
                console.log("not accountz found")
            }  
        } catch (error) {
            console.log("no accounts found");
        }
}

const ifTransactionsExists = async()=>{
    try{

        const transactionContract = getEthereumContract();
        const transactionCount = await transactionContract.getTransactionCount();
        window.localStorage.setItem("transactionCount", transactionCount);

    }catch(error){
        console.log(error);
            // throw new error ("no ethereum object found")
    }
}





const connectWallet = async ()=>{
    try{
    if(!ethereum){ return alert("please install metamask");}
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setConnectedAccount(accounts[0]);

    }catch(error){
        console.log(error)
        throw new error("no ethereum  object Found");
    }
}




// sending the transaction 
const sendTransaction  = async ()=>{

try {
    
    if(!ethereum) return alert("please install metamask");
        
    const {addressto, amount, keyword, message} = formData;
    const transactionContract=getEthereumContract();
    const parsedAmount = ethers.utils.parseEther(amount);

    console.log(transactionContract)
    await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: connectedAccount,
            to: addressto,
            gas: '0x5208', //written in hexadecimal form == 21000 decimal unit wel ==0.0000021eth
            value: parsedAmount._hex, //in decimal so we need to convert it into hexadecimal
        }],
})

    const transactionHash= await transactionContract.addToBlockchain(addressto, parsedAmount, message, keyword);
    setLoading(true);
    console.log(   `Loading -${transactionHash}`);
    await transactionHash.wait();
    setLoading(false);
    console.log(`success - ${transactionHash.hash}`);

    const transactionCounter = await transactionContract.getTransactionCount();
    setTransactionCount(transactionCounter.toNumber());

} catch (error) {
    console.log(error);
    throw new Error("no ethereum object found");
}

}







useEffect(()=>{
    checkidwalletisconnected();
    ifTransactionsExists();
},[]);


        return (
            <transactionContext.Provider value={{connectWallet, connectedAccount, formData, sendTransaction, handleChange}}>
                {children}
            </transactionContext.Provider>
        );
}
