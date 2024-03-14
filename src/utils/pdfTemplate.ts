import { TCartItem } from "../types/invoice-types.js";



const logo = "https://levitation.in/wp-content/uploads/2023/12/Frame-39624.svg";

// const products = [
//     {
//         id: 1,
//         name: "Product 1",
//         price: 100,
//         quantity: 1
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: 200,
//         quantity: 2
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: 300,
//         quantity: 3
//     },
//     {
//         id: 4,
//         name: "Product 4",
//         price: 400,
//         quantity: 4
//     },



// ]



const date = new Date();
date.setMonth(date.getMonth() + 4);




export const pdfTemplate = (products: TCartItem[], total: number, gst: number, grandTotal: number) => {

    const validity = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date)


    const productsTemplate = products.map(product => (
        `
        <tr class="data-row" >
        <td >${product.name}</td>
        <td class="center blue">${product.quantity}</td>
        <td >${product.price}</td>
        <td >INR ${product.quantity * product.price}</td>
    </tr>
        `
    )).join("")





    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            .main-container {
                display: flex; 
                overflow-y: auto; 
                padding-top: 2.5rem;
                padding-bottom: 2.5rem; 
                padding-left: 3rem;
                padding-right: 3rem; 
                flex-direction: column; 
                justify-content: space-between; 
                height: 100vh; 
            }
        
            .header {
                display: flex; 
                justify-content: space-between; 
                align-items: center; 
            }
        
            .title {
                font-size: 2rem;
                line-height: 1.5rem; 
                letter-spacing: 0; 
                text-align: center; 
            }
        
            .logo {
                width: 8rem; 
                background-color: #000000; 
            }
        
            .content {
                display: flex; 
                margin-left: 2.5rem;
                margin-right: 2.5rem; 
                flex-direction: column; 
                gap: 5rem; 
            }
        
            .product-table {
                margin-top: 40px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                border-collapse: collapse;
            }
        
            .header-row {
                text-align: left; 
            }

            .data-row {
                border-bottom-width: 2px; 
            }

            th, td {
                padding: 1.25rem; 
                border-bottom: 0.01px solid rgba(0,0,0,0.2); 
            }

            td {
                font-size: 0.875rem;
                line-height: 1.25rem; 
                font-weight: 600; 
                opacity: 0.7; 
            }

            blue {
                color: #2563EB;
            }

            .center {
                display: grid 
                place-items: center; 
            }
        
            .total-section {
                display: flex; 
                margin-right: 2rem; 
                flex-direction: column; 
                gap: 0.75rem; 
                justify-content: space-between; 
                align-self: flex-end; 
                width: 40%; 
            }


            .total-rows {
                display: flex;
                justify-content: space-between; 
            }
            .total-grandTotal {
                padding-top: 0.75rem;
                padding-bottom: 0.75rem; 
            }

            .total-label {
                font-size: 1.125rem;
                line-height: 1.75rem; 
                font-weight: 700; 
            }
            .total-value {
                font-size: 1.125rem;
                line-height: 1.75rem; 
                font-weight: 600; 
            }

            .gst-label {
                font-weight: 600; 
                opacity: 0.5; 
            }
            
            .grand-total {
                border-top: 1px solid rgba(0,0,0,0.2);
                border-bottom: 1px solid rgba(0,0,0,0.2);
            }
            .grandTotal-label {
                font-size: 1.125rem;
                line-height: 1.75rem; 
                font-weight: 800; 
            }
            .grandTotal-value {
                font-size: 1.125rem;
                line-height: 1.75rem; 
                font-weight: 700; 
                color: #60A5FA; 
            }

            .valid-date {
                font-weight: 700; 
            }

            .terms-section {
                background-color: rgba(0, 0, 0, 0.80);
                color: white;
                padding: 24px;
                border-radius: 50px;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                flex-direction: row;
                gap: 12px;
            }

            .terms-section {
                padding-top: 1.5rem;
                padding-bottom: 1.5rem; 
                padding-left: 3rem;
                padding-right: 3rem; 
                flex-direction: column; 
                border-radius: 9999px; 
                color: #ffffff; 
            }
        
            .terms-section h3 {
                font-size: 0.85rem;
                line-height: 0.2rem; 
                font-weight: 600; 
                letter-spacing: 0.05em; 
                text-transform: uppercase; 
                position: fixed;
                bottom: 0;
            }
        
            .terms-section p {
                letter-spacing: 1px;
                font-size: 10px;
                line-height: 1.7
            }
        </style>
    </head>
    <body>
        <div class="main-container">
            <div class="header">
                <div class="title">Invoice Generator</div>
                <img src="https://levitation.in/wp-content/uploads/2023/12/Frame-39624.svg" alt="logo" class="logo" />
            </div>
        
            <div class="content">
                <table class="product-table">
                    <thead>
                        <tr class="header-row">
                            <th>Product</th>
                            <th class="center">Quantity</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productsTemplate}
                    </tbody>
                </table>
        
                <article class="total-section">
                    <div class="total-rows">
                        <p class="total-label">Total</p>
                        <p class="total-value">INR ${total}</p>
                    </div>
                    <div class="total-rows">
                        <p class="gst-label">GST (18%)</p>
                        <p class="gst-label">${gst}</p>
                    </div>
                    <div class="total-rows grand-total">
                        <p class="grandTotal-label">Grand Total</p>
                        <p class="grandTotal-value">Rs ${grandTotal}</p>
                    </div>
                </article>

                <p>Valid until : <span class="valid-date">${validity}</span></p>

                <div class="terms-section">
                    <h3>Terms and Conditions</h3>
                    <p>We are happy to supply any further information you may need and trust that you call on us to fill your order, which will receive our prompt and carefull consideration</p>
                </div>
            </div>
        </div>
    </body>
</html>
    `
}