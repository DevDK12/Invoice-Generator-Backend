import { NextFunction, Request, Response } from "express";
import CatchAsync from "../error/catchAsync.js";
import { postOrderProductType } from "../types/invoice-types.js";

import pptr from 'puppeteer';
import { pdfTemplate } from "../utils/pdfTemplate.js";






export const postGenerateInvoice = CatchAsync(async (
    req: Request<{}, {}, postOrderProductType>,
    res: Response,
    next: NextFunction
) => {

    const { userName, userId, userEmail, products, total, gst, grandTotal } = req.body;

    const browser = await pptr.launch();
    const page = await browser.newPage();

    await page.setContent(pdfTemplate(products, total, gst, grandTotal));


    const buffer = await page.pdf({
        // path: './assets/invoice.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            left: '0px',
            top: '0px',
            right: '0px',
            bottom: '0px'
        }
    })

    await browser.close();

    console.log('Pdf created');

    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', 'attachment; filename="invoice.pdf"'); // filename can be customized
    res.send(buffer);

    


})