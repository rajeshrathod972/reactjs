import React from 'react';
import { FaCopy } from 'react-icons/fa';
import QRCode from '../assets/images/QR_code.svg';

const Checkout = () => {
    const descriptionText = "12h8zEe2MzTgZvDrJpMyudfasbeKaAYnLJ";

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
        <div>
            <div>
                <div class="container containerBg mt-5 p-4 max-w-60">
                    <p>To make a <b> 523.95 USD</b> deposit, please send<b> 0.00534053 BTC </b>to the address below.</p>

                    <div class="d-flex">
                        <div>
                            <img src={QRCode} alt="QR Code" />
                        </div>
                        <div class="mt-4 d-grid">
                            <p><b>Your <span className="yellow-text">BTC</span> wallet address</b></p>
                            <div>
                                <div className="border p-2 rounded bg-light d-flex justify-content-between align-items-center">
                                    <p className="mb-0 me-2">{descriptionText}</p>
                                    <button
                                        onClick={handleCopy}
                                        className="btn btn-outline-secondary"
                                        title="Copy to clipboard"
                                    >
                                        <FaCopy size={20} />
                                    </button>
                                </div>
                            </div>
                            <p>To complete the payment, please open your crypto wallet and transfer the specified amount to the wallet address listed above. <br /> Your crypto will be automatically converted to your account's currency. <br />
                                <a href="https://example.com" class="text-indigo text-decoration-underline">
                                    Check your wallet in the blockchain here.
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h3 class="">Check deposit status</h3>
                        <div class="mt-3 max-w-40">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-column align-items-start align-items-center"><span class="big-dot text-center">1</span><span><b>STARTED</b></span>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center"><span class="big-dot text-center">2</span><span><b>PENDING</b></span></div>
                                <div class="d-flex flex-column justify-content-center align-items-center"><span class="big-dot text-center">3</span><span><b>COMPLETED</b></span></div>
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                                <span class="dot"></span>
                                <hr class="flex-fill track-line" /><span class="dot"></span>
                                <hr class="flex-fill track-line" /><span class="dot"></span>
                            </div>

                            <div class="row">
                                <div class="col-4 text-align-start"><span>Few second ago<br /></span><p class="fw-bold">Wallet address generated</p>
                                </div>
                                <div class="col-4 text-align-center"><span class="fw-bold">Transaction is processing in the bloackchin. Current confirmations:0 <br /></span><span><a href="https://example.com" class="text-indigo text-decoration-underline">Blockexplorer link</a></span></div>
                                <div class="col-4 text-align-end"><span class="fw-bold">Funds are booked on your account.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
