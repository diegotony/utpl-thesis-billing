import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import config from './config/config';

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


@Controller()
export class AppController {

  private readonly client: ClientProxy;
  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create(
      {
        transport: Transport.REDIS,
        options: {
          url: 'redis://' + config.REDIS_HOST + ':6379',
        }
      }
    );

    // biiling


  }


  @Get()
  async test() {
    doc = new PDFDocument;
    doc.pipe(fs.createWriteStream('output.pdf'));
    doc.fontSize(15).text('Wally Gator !', 50, 50);
    // Set the paragraph width and align direction
    doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
      width: 410,
      align: 'left'
    });
    doc.end();

    const mailOptions = {
      from: 'lacompañia@gmail.com', // sender address
      to: 'tucotony1396@gmail.com', // list of receivers
      subject: 'Subject of your email', // Subject line
      html: '<p>Your html here</p>'// plain text body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(`error: ${error}`);
      }
      console.log(`Message Sent ${info.response}`);
    });

  }





}
