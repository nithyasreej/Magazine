import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './styles.css'; // Import your styles for the flipbook
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdf from './Techmag.pdf'; // Sample PDF file path

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Component for the modal/lightbox
function FlipBookModal({ isOpen, onClose }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <HTMLFlipBook width={350} height={500} showCover={true}>
          {[...Array(numPages).keys()].map((n) => (
            <div key={n} className="page">
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={n + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={350}
                  className="border-3 border-black"
                />
              </Document>
            </div>
          ))}
        </HTMLFlipBook>
        
      </div>
    </div>
  );
}

// Your component containing the array of cover images
function CoverImagesComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      {/* Modal/lightbox component */}
      <FlipBookModal isOpen={isModalOpen} />
    </div>
  );
}

export default CoverImagesComponent;
