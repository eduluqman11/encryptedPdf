const qpdf = require('node-qpdf');

const options = {
    keyLength: 256,
    password: '12345',
    outputFile: './upload/document_encrypted.pdf',
    restrictions: {
      modify: 'none',
      extract: 'n'
    }
}

const encryptAndSend = async () => {
    const filePath = './upload/EDU1.pdf'
    fs.access(filePath,(err) => {
        if (err) {
            if (err.code === 'ENOENT') return 'File Not Found!'
        }})
	 await qpdf.encrypt(filePath, options)
	
}
encryptAndSend()

