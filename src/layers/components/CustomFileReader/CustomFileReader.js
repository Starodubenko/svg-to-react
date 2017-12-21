import React from 'react';
import FileReaderInput from 'react-file-reader-input';
import svgson from 'svgson';

import './CustomFileReader.scss';

const reader = new FileReader();

export class CustomFileReader extends React.Component {
    handleChange = (e, results) => {
        results.forEach(result => {
          const [e, file] = result;
          reader.onload = (file => {
            svgson(file.srcElement.result, {
              title: 'SVG',
              pathsKey: 'root',
              customAttrs: {}
            }, function(result) {
              console.log(result);
            });
          })
          reader.readAsText(file);
        });
      }
      
      render() {
        return (
          <form>
            <label htmlFor="my-file-input">Upload a File:</label>
            <FileReaderInput as="binary" id="my-file-input" onChange={this.handleChange}>
              <button type="button">Select a file!</button>
            </FileReaderInput>
          </form>
        );
      }
}