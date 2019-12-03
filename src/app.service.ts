import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
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
    pass: 'KONG1234'
  }
});


@Injectable()
export class AppService {
  private readonly redis: ClientProxy
  constructor() {
    this.redis = ClientProxyFactory.create(
      {
        transport: Transport.REDIS,
        options: {
          url: 'redis://' + config.REDIS_HOST + ':6379',
        }
      }
    );
  }


  async gatData(id_order): Promise<any> {
    let f = this.redis.send<any>('findOrder', [id_order]).subscribe((order) => {
      console.log(order)
      this.redis.send<any>('findClient', [order.id_user]).subscribe((client) => {
        console.log(client)
        doc = new PDFDocument;
        doc.pipe(fs.createWriteStream('output.pdf'));
        doc.fontSize(15).text('Wally Gator !', 50, 50);
        doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
          width: 410,
          align: 'left'
        });
        doc.end();
        const mailOptions = {
          from: 'lacompañia@gmail.com', // sender address
          to: 'tucotony1396@gmail.com', // list of receivers
          subject: 'Factura', // Subject line
          html: '<p>FActura de consumo del establecimiento</p>',// plain text body
          attachments: [{
            filename: 'billing.pdf',
            path: 'output.pdf',
            contentType: 'application/pdf'
          }],
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(`error: ${error}`);
          }
          console.log(`Message Sent ${info.response}`);

          return  {"ok":"true"}
        });

      })

    })
  }


}

