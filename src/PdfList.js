import React from 'react';

const PdfList = ({ pdfs, onPdfClick }) => {
    return (
        <div>
            <h2>List of PDFs</h2>
            <ul>
                {pdfs.map((pdf, index) => (
                    <li key={index} onClick={() => onPdfClick(pdf)}>
                        {pdf.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PdfList;
