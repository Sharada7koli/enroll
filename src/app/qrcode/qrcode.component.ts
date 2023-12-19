import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements AfterViewInit {
  @ViewChild('qrcodeCanvas') qrcodeCanvas!: ElementRef;
  linkInput: string = '';
  isGenerated: boolean = false;
  errorMessage: string | null = null;

  ngAfterViewInit() {
    // You can choose to generate the QR code on component initialization or after user input
    // this.generateQRCode();
  }

  generateQRCode() {
    if (!this.linkInput) {
      this.errorMessage = 'Provide a link to generate QR Code....!!!';
      return;
    }

    const canvas: HTMLCanvasElement = this.qrcodeCanvas.nativeElement;

    QRCode.toCanvas(canvas, this.linkInput, (error) => {
      if (error) {
        console.error(error);
        // Optionally, you can display an error message to the user
        this.errorMessage = 'Error generating QR Code.';
      } else {
        this.isGenerated = true;
        this.errorMessage = null; // Clear any previous error message
      }
    });
  }
}
