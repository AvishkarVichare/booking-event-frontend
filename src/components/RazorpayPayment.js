import React from "react";
import axios from "axios";

function RazorpayPayment() {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:5000/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;


        const options = {
            key: "rzp_test_TRI6oMbV9P1Wvj", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Avishkar & Tejas Co LTD.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    // orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    // razorpayOrderId: response.razorpay_order_id,
                    // razorpaySignature: response.razorpay_signature,
                };
                console.log(data)

                const result = await axios.post("http://localhost:5000/success", data);

                alert("Payment Successful\n" + result.data.razorpayPaymentId);
            },
            prefill: {
                name: "Avishkar & Tejas Co LTD.",
                email: "demo@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Avishkar & Tejas Co LTD. Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Buy Ticket now!</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </header>
        </div>
    );
}

export default RazorpayPayment;