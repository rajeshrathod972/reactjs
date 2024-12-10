import React from "react";
import QRCode from "../assets/images/QR_code.svg";
import { FaCopy } from 'react-icons/fa';
const Checkout = () => {

    const descriptionText = "12h8zEe2MzTgZvDrJpMyudfasbeKaAYnLJ";

    const depositStatus = "active";
    let started = false;
    let pending = false;
    let completed = false;
    if (depositStatus === "active") {
        started = true;

        pending = false;

        completed = false;
    }
    else if (depositStatus === "pending") {
        started = true;

        pending = true;

        completed = false;

    }
    else if (depositStatus === "completed") {
        started = true;

        pending = true;

        completed = true;

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(descriptionText)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="section flex items-center justify-center my-5 ">
            <div className="page max-w-[1230px] min-h-[700px] bg-white py-2">
                <p className="mx-3 font-medium">To make a <span className="font-bold">523.95 Usd</span> deposit, please send <span className="font-bold">0.00534053 BTC</span> to the address below.</p>

                <div className="flex flex-col sm:flex-row mx-4">
                    <img src={QRCode} alt="" />
                    <div className="flex flex-col justify-between py-4">
                        <p className="font-bold">Your <span className="text-yellow-500">BTC</span> wallet address</p>
                        <div className="border p-2 rounded bg-gray-100 flex justify-between items-center">
                            <p className="mb-0 mr-2 font-medium">{descriptionText}</p>
                            <button
                                onClick={handleCopy}
                                className="border border-gray-300 text-gray-700 rounded px-2 py-1 hover:bg-gray-200"
                                title="Copy to clipboard"
                            >
                                <FaCopy size={20} />
                            </button>
                        </div>
                        <p className="font-medium">
                            To complete the payment, please open your crypto wallet and transfer the specified amount to the wallet address listed above. Your crypto will be automatically converted to your account's currency. <br />
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-800 underline font-medium"
                            >
                                Check your wallet in the blockchain here.
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center mt-5 mx-2">
                    <p className="font-bold">Check deposit status</p>
                    <div className="mt-4 max-w-[900px] w-full">
                        <div className="flex justify-between max-w-[700px] mx-auto">
                            <p className="flex flex-col items-center font-bold mx-1">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${started ? 'bg-yellow-500' : 'bg-red-500'
                                        }`}
                                >1</span>
                                STARTED
                            </p>
                            <p className="flex flex-col items-center font-bold">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${pending ? 'bg-yellow-500' : 'bg-gray-300'
                                        }`}
                                >2</span>
                                PENDING
                            </p>
                            <p className="flex flex-col items-center font-bold">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${completed ? 'bg-yellow-500' : 'bg-gray-300'
                                        }`}
                                >3</span>
                                COMPLETED
                            </p>
                        </div>

                        <div className="flex justify-between items-center max-w-[620px] mx-auto">
                            <div className={`w-3 h-2 rounded-full ${started === true ? 'bg-yellow-500' : 'bg-gray-300'
                                }`}></div><hr
                                className={`border-t-2 w-4/5 mx-auto my-6 ${pending == true ? 'border-yellow-700' : 'border-gray-300'
                                    }`}
                            />
                            <div className={`w-3 h-2 rounded-full ${pending === true ? 'bg-yellow-500' : 'bg-gray-300'
                                }`}></div><hr
                                className={`border-t-2 w-4/5 mx-auto my-6 ${completed === true ? 'border-yellow-700' : 'border-gray-300'
                                    }`}
                            />
                            <div className={`w-3 h-2 rounded-full ${completed === true ? 'bg-yellow-500' : 'bg-gray-300'
                                }`}></div>
                        </div>


                        <div className="flex justify-between max-w-[720px] mx-auto">
                            <p>
                                <span className="block text-xs font-medium">few seconds ago</span>
                                <span className="font-bold text-sm">Wallet address <br /> generated</span>
                                
                            </p>

                            <p className="font-bold ml-11">Transaction is <br /> processing in the  <br /> blockchain. Current  <br /> confirmations: 0</p>
                            <p className="font-bold">Funds are blocked on <br /> your account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DemoPage
