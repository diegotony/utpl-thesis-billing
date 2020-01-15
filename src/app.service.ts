import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import config from './config/config';
import { Observable } from 'rxjs';
var PDFDocument, doc;
var fs = require('fs');
PDFDocument = require('pdfkit');
import * as nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'constantine1396@gmail.com',
    pass: 'KONG1234',
  },
});

@Injectable()
export class AppService {
  private readonly redis: ClientProxy;
  constructor() {
    this.redis = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://' + config.REDIS_HOST + ':6379',
      },
    });
  }

  items = [
    {
      item: 'TC 100',
      description: 'Toner Cartridge',
      quantity: 2,
      amount: 6000,
    },
    {
      item: 'USB_EXT',
      description: 'USB Cable Extender',
      quantity: 1,
      amount: 2000,
    },
  ];

  async gatData(id_order): Promise<any> {
    let f = this.redis
      .send<any>('findOrder', [id_order])
      .subscribe(order => {
        console.log(order);
        this.redis
          .send<any>('findClient', [order.id_user])
          .subscribe(client => {
            console.log(client);
            doc = new PDFDocument({ margin: 50 });
            this.generateHeader(doc);
            this.generateCustomerInformation(doc, order, client);
            this.generateInvoiceTable(doc, this.items);
            // this.generateFooter(doc);

            doc.pipe(fs.createWriteStream('output.pdf'));
            // doc.fontSize(15).text('Wally Gator !', 50, 50);
            // doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
            //   width: 410,
            //   align: 'left'
            // });
            doc.end();
            const mailOptions = {
              from: 'lacompañia@gmail.com', // sender address
              to: 'tucotony1396@gmail.com', // list of receivers
              subject: 'Factura', // Subject line
              html: '<p>FActura de consumo del establecimiento</p>', // plain text body
              attachments: [
                {
                  filename: 'billing.pdf',
                  path: 'output.pdf',
                  contentType: 'application/pdf',
                },
              ],
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                return console.log(`error: ${error}`);
              }
              console.log(`Message Sent ${info.response}`);

              return { ok: 'true' };
            });
          });
      });
  }

  generateHeader(doc) {
    doc
      // .image("logo.png", 50, 45, { width: 50 })
      .fillColor('#444444')
      .fontSize(20)
      .text('Restaturant Microservices', 110, 57)
      .fontSize(10)
      .text('Direccion', 200, 65, { align: 'right' })
      .text('Loja', 200, 80, { align: 'right' })
      .moveDown();
  }

  generateFooter(doc) {
    doc
      .fontSize(10)
      .text('Un placer servirle', 50, 780, { align: 'center', width: 500 });
  }

  generateCustomerInformation(doc, order, client) {
    doc
      .text(`Invoice Number: ${order._id}`, 50, 200)
      // .text(`Invoice Date: ${new Date()}`, 50, 215)
      .text(`Balance Due: ${order.total}`, 50, 230)

      .text(`${client.first_name} ${client.last_name}`, 300, 200)
      .text(client.dni, 300, 215)
      .text(client.email, 300, 230)
      // .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 130)
      .moveDown();
  }

  generateTableRow(doc, y, c1, c2, c3, c4, c5) {
    doc
      .fontSize(10)
      .text(c1, 50, y)
      .text(c2, 150, y)
      .text(c3, 280, y, { width: 90, align: 'right' })
      .text(c4, 370, y, { width: 90, align: 'right' })
      .text(c5, 0, y, { align: 'right' });
  }

  generateInvoiceTable(doc, items) {
    let i,
      invoiceTableTop = 330;

    for (i = 0; i < items.length; i++) {
      const item = items[i];
      const position = invoiceTableTop + (i + 1) * 30;
      this.generateTableRow(
        doc,
        position,
        item.item,
        item.description,
        item.amount / item.quantity,
        item.quantity,
        item.amount,
      );
    }
  }
}
