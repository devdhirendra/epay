import React, { useState } from 'react';
import './Style.css';
import fundTransferLogo from './assets/fund-transfer-logo.png';
import upiTransferLogo from './assets/upi-transfer-logo.png';
import mobileRechargeLogo from './assets/mobile-recharge-logo.png';
import otherServicesLogo from './assets/other-services-logo.png';

function Payment() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="payment-section">
            <h2>Payment Options</h2>
            {!selectedOption && (
                <div>
                    <div className="payment-option" onClick={() => handleOptionClick('fundTransfer')}>
                        <img src={fundTransferLogo} alt="Fund Transfer" />
                        <span>Fund Transfer</span>
                    </div>
                    <div className="payment-option" onClick={() => handleOptionClick('upiTransfer')}>
                        <img src={upiTransferLogo} alt="UPI Transfer" />
                        <span>UPI Transfer</span>
                    </div>
                    <div className="payment-option" onClick={() => handleOptionClick('mobileRecharge')}>
                        <img src={mobileRechargeLogo} alt="Mobile Recharge" />
                        <span>Mobile Recharge</span>
                    </div>
                    <div className="payment-option" onClick={() => handleOptionClick('otherServices')}>
                        <img src={otherServicesLogo} alt="Other Services" />
                        <span>Other Services</span>
                    </div>
                </div>
            )}
            {selectedOption === 'fundTransfer' && (
                <div>
                    <h3>Fund Transfer Details</h3>
                    <form>
                        <label htmlFor="account-number">Bank Account Number:</label>
                        <input type="text" id="account-number" name="account-number" placeholder="Account Number" />
                        <label htmlFor="account-name">Account Name:</label>
                        <input type="text" id="account-name" name="account-name" placeholder="Account Name" />
                        <label htmlFor="ifsc-code">IFSC Code:</label>
                        <input type="text" id="ifsc-code" name="ifsc-code" placeholder="IFSC Code" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            {selectedOption === 'upiTransfer' && (
                <div>
                    <h3>UPI Transfer Details</h3>
                    <form>
                        <label htmlFor="upi-id">Enter UPI ID:</label>
                        <input type="text" id="upi-id" name="upi-id" placeholder="UPI ID" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            {selectedOption === 'mobileRecharge' && (
                <div>
                    <h3>Mobile Recharge Details</h3>
                    <form>
                        <label htmlFor="mobile-number">Mobile Number:</label>
                        <input type="text" id="mobile-number" name="mobile-number" placeholder="Mobile Number" />
                        <label htmlFor="operator">Select Operator:</label>
                        <select id="operator" name="operator">
                            <option value="airtel">Airtel</option>
                            <option value="vodafone">Vodafone</option>
                            <option value="jio">Jio</option>
                            <option value="bsnl">BSNL</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            {selectedOption === 'otherServices' && (
                <div>
                    <h3>Other ePayment Services</h3>
                    <p>Details of various ePayment services with logos will go here.</p>
                </div>
            )}
            {selectedOption && (
                <button className='goback' onClick={() => setSelectedOption(null)}>Go Back</button>
            )}
        </div>
    );
}

export default Payment;
/**
 * @file Payment.js
 * @description This file is part of the e-Pay project.
 * @author Dhirendra Kumar Ojha.
 * @date 2024
 */