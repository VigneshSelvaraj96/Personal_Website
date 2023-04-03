import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';



const theme = createTheme({
    palette: {
      myCustomBlue: {
        main: '#27C93F'
      }
    }
  });

export default function About() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      }, []);
    pdfjs.GlobalWorkerOptions.disableTextLayer = true;
    pdfjs.GlobalWorkerOptions.disableAnnotationLayer = true;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    function aboutMeText() {
        return(
            <div className={Style.parentcontainer}>
                <Document
                    file="USC Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} renderTextLayer={false}/>
                </Document>
                <ThemeProvider theme={theme}>
                <a href="USC Resume.pdf" download>
                    <Button variant="contained" color='myCustomBlue' startIcon={<DownloadSharpIcon />} className={Style.downloadbtn}>
                        Download
                    </Button>
                </a>
                </ThemeProvider>
            </div>
        );
        }


    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} justifyContent={'center'} >
            <Terminal text={aboutMeText()}/>
        </Box>
    )
}