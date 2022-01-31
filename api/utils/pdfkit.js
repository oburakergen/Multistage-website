const PDFDocument = require('pdfkit');

const generateHeader = (doc) => doc.image('./assets/img/logo.png', 50, 45, { width: 120 })
    .fillColor('#444444')
    .fontSize(20)
    .fontSize(10)
    .text('123 Main Street', 150, 60, { align: 'right' })
    .text('New York, NY, 10025', 200, 72, { align: 'right' })
    .moveDown();

const generateFooter = (doc, text) => doc.fontSize(
    10,
).text(
    'Payment is due within 15 days. Thank you for your business.',
    50,
    780,
    { align: 'center', width: 500 },
);

const pdfTable = (dataCallback, endCallback, data) => {
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    // doc.pipe(fs.createWriteStream('utils/output.pdf'));

    doc.fontSize(20).text(data.heading);
    doc.fontSize(12).text(data.text, {

    });
    doc.fontSize(12).text(data.text, {
        width: 412,
        align: 'justify',
        indent: 30,
        columns: 2,
        height: 300,
        ellipsis: true,
    });
    doc.fontSize(12).text(data.text, {
        width: 412,
        align: 'justify',
        indent: 30,
        columns: 2,
        height: 300,
        ellipsis: true,
    });

    generateHeader(doc);
    doc.end();
};

module.exports = { pdfTable };
