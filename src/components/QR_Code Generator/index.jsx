import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false)

  function handleGenerateQrCode(){
    setClicked(true)
    setQrCode(input)
  }


  return (
    <div>
      <h1>Qr Code generator</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate QR</button>
      </div>
      <div>
      {clicked && input && input.trim() !== '' && <QRCode id="Qr-code-value" value={qrCode} size="200" />}
      </div>
    </div>
  );
}

export default QrCodeGenerator;
