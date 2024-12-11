import React, { useState } from 'react';
import QRCode from "../assets/images/QR_code.svg";
import { FaCopy } from 'react-icons/fa';
import FirebyteICon from "../assets/images/firebytes-small-dark.png"
const Checkout = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputWidth, setInputWidth] = useState(20); // Initial width set to 20px

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setInputWidth((value.length + 1) * 14); // Adjust width based on the input length
    };

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
    // const isDisabled = inputValue === '0';
    const isDisabled = '0';

    return (
        <>
            {/* <div className="section flex items-center justify-center my-5 ">
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


                </div>
            </div> */}

            <div className="relative z-10 max-w-full overflow-hidden" id="isMobile">
                <div
                    className="absolute bg-[rgb(35,113,236)] h-screen w-[200vw] z-[-2]"
                    style={{
                        transform: "rotate(6deg) skewX(-50deg) scaleX(-1)",
                        transformOrigin: "0 100%",
                        top: "auto",
                        bottom: "60%",
                        left: "93%",
                    }}></div>
                <div className="relative flex flex-col items-center justify-center mt-20 mx-3">
                    <img src={FirebyteICon} alt="" className="h-16 w-16 absolute -top-6 z-10 rounded-md" />
                    <div class="flex items-center justify-center text-center relative z-0">
                        <div class="w-auto rounded overflow-hidden shadow-lg bg-white p-6">
                            <p class="text-gray-700 font-medium text-lg mb-2 mt-[50px]">Paying</p>
                            <h2 class="text-gray-900 text-2xl font-bold mb-4">SYNEXIS TECHNOLOGIES</h2>
                            <p class="text-gray-600 text-sm mb-4">razopay.me/@synexiesttechnologies</p>

                            <div class="flex justify-center items-center py-6 w-full">
                                <span class="font-semibold text-2xl leading-6 text-[#2b4486] mr-0 flex-shrink-0">₹</span>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    className="font-bold text-2xl leading-8 text-[#162f56] border-0 outline-none p-0 text-center"
                                    placeholder="0"
                                    style={{ width: `${inputWidth}px` }} // Dynamically set the width
                                />
                            </div>

                            <textarea
                                class="bg-[#162f56] bg-opacity-5 rounded-lg leading-8 text-center outline-none border-0 resize-none m-auto text-[#162f56] text-opacity-54  w-[260px] h-[36px] overflow-hidden mb-[50px]"
                                maxLength={100}
                                placeholder="Add a note"
                            ></textarea>
                            <button
                                type="button"
                                disabled={isDisabled} // Disable the button if input value is '0'
                                className={`font-medium text-sm px-5 py-2.5 text-center inline-flex justify-center items-center rounded-lg w-full mt-4 ${isDisabled ? 'bg-[rgb(35,113,236)] text-white cursor-not-allowed opacity-50' : 'bg-[rgb(35,113,236)] text-white hover:bg-[rgb(35,113,236)]'
                                    }`}
                            >
                                Pay ₹{inputValue || 0}
                            </button>
                        </div>
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




        </>
    )

}

export default Checkout
