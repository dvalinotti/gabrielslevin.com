import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };

    return (
      <div>
        <Document
          file="../resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}
