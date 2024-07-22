import React, { useEffect, useRef } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/web/pdf_viewer.css'; // Import PDF viewer CSS
import HTMLFlipBook from 'react-pageflip';
import magazinePDF from './Techmag.pdf';
// import workerDef from './src/node_modules/'

GlobalWorkerOptions.workerSrc = "../node_modules/pdfjs-dist/build/pdf.worker.mjs";

export default function PdfViewer(props) {
  const flipbookRef = useRef(null);

  useEffect(() => {
    const renderPDF = async () => {
        try {
          // Load PDF document
          const loadingTask = getDocument(magazinePDF);
          const pdf = await loadingTask.promise;
          const numPages = pdf.numPages;
      
          // Render each page
          for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.0 });
      
            // Render page to canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
      
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };
      
            await page.render(renderContext).promise;
      
            // Append canvas to flipbook
            flipbookRef.current.appendChild(canvas);
          }
        } catch (error) {
          console.error('Error rendering PDF:', error);
        }
      };
      
    renderPDF();
  }, []);

  return (
    <HTMLFlipBook width={300} height={500} ref={flipbookRef}>
      {/* Canvas elements will be appended here */}
    </HTMLFlipBook>
  );
}
