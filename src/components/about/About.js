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
import resume from './USC Resume.pdf';



const theme = createTheme({
    palette: {
      myCustomBlue: {
        main: '#27C93F',
        contrastText: 'black',
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
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} renderTextLayer={false}/>
                </Document>
                <ThemeProvider theme={theme}>
                <a href="USC Resume.pdf" download>
                    <Box sx={{mt:3}}>
                        <Button variant="contained" color='myCustomBlue' startIcon={<DownloadSharpIcon />}>
                            Download
                        </Button>
                    </Box>
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