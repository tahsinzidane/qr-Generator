function generateQR() {
  // Get the input data
  var inputData = document.getElementById('input-data').value;
  
  // Create QR Code
  var qr = qrcode(0, 'M');
  qr.addData(inputData);
  qr.make();
  
  // Render QR Code
  var qrCodeElement = document.getElementById('qr-code');
  qrCodeElement.innerHTML = qr.createImgTag();
}