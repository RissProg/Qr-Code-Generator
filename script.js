function generateQR() {
    if(value.length >0){

                        

    }


        let text = document.getElementById("text").value;
        let qrcodeDiv = document.getElementById("qrcode");
        qrcodeDiv.innerHTML = ""; // Önceki QR kodunu temizle
        
        if (text.trim() !== "") {
            new QRCode(qrcodeDiv, {
                text: text,
                width: 200,
                height: 200
            });
        } else {
            alert("Lütfen bir metin girin!");
        }
    }
