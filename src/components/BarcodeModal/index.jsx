import Modal from 'react-modal';
import React, { useEffect, useState, useRef } from 'react';
import {Container} from './styles';
import { useDataStoreBarcode } from '../../services/stores/dataStoresBarcode';
import closeImg from '../../assets/close.svg';
import {
  BrowserMultiFormatReader,
  NotFoundException,
  ChecksumException,
  FormatException
} from "@zxing/library";

Modal.setAppElement('#root');
export function BarcodeModal({isOpen,onRequestClose }){

  const { setBarcodeData } = useDataStoreBarcode();
  const myContainer = useRef(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [startVideo, setStartVideo] = useState(false);
  const [code, setCode] = useState("");

  
  const [videoInputDevices, setVideoInputDevices] = useState([]);

  const codeReader = new BrowserMultiFormatReader();

  console.log("ZXing code reader initialized");
  console.log(startVideo);

  useEffect(() => {
    codeReader
      .listVideoInputDevices()
      .then(videoInputDevices => {
        setupDevices(videoInputDevices);
      })
      .catch(err => {
        console.error(err);
      });
  }, [startVideo]);

  function setupDevices(videoInputDevices) {
    
    // selects first device
    // setSelectedDeviceId(videoInputDevices[0].deviceId);

    // setup devices dropdown
    if (videoInputDevices.length >= 1) {
      setVideoInputDevices(videoInputDevices)
    }
  }

  function resetClick() {
    codeReader.reset();
    setCode("");
    console.log("Reset.");
  }

  function decodeContinuously(selectedDeviceId) {
    codeReader.decodeFromVideoDevice(
      selectedDeviceId,
      "video",
      (result, err) => {
        if (result) {
          // properly decoded qr code
          console.log("Found code!", result);
          setBarcodeData(result.text);
          resetClick();
          onRequestClose();

        }

        if (err) {
          setCode("");

          // As long as this error belongs into one of the following categories
          // the code reader is going to continue as excepted. Any other error
          // will stop the decoding loop.
          //
          // Excepted Exceptions:
          //
          //  - NotFoundException
          //  - ChecksumException
          //  - FormatException

          if (err instanceof NotFoundException) {
            console.log("No code found.");
          }

          if (err instanceof ChecksumException) {
            console.log("A code was found, but it's read value was not valid.");
          }

          if (err instanceof FormatException) {
            console.log("A code was found, but it was in a invalid format.");
          }
        }
      }
    );
  }

  useEffect(
   
    deviceId => {
      if(startVideo){
        decodeContinuously(selectedDeviceId);
        console.log(`Started decode from camera with id ${selectedDeviceId}`);
      }
    },
    
    [selectedDeviceId, startVideo]
  );
 
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img 
          src={closeImg}
          alt="Fechar Modal"
        />

      </button>
      <Container >
        {/* <main class="wrapper"> */}
            <div id="sourceSelectPanel">
              <label for="sourceSelect">Change video source:</label>
              <select
                ref={myContainer}
                id="sourceSelect"
                onChange={() => setSelectedDeviceId(myContainer.current)}
              > 
                { 
                  videoInputDevices.map(element => (
                    <option value={element.deviceId}>{element.label}</option>
                  )) 
                }
              </select>
            </div>

            <div>
              <video id="video" width="300" height="300" />
            </div>

            <label>Result:</label>
            <pre>
              <code id="result">{code}</code>
            </pre>

            <button id="resetButton" onClick={() => resetClick()}>
              Reset
            </button>
            <button onClick={() => setStartVideo(true)}>
              start
            </button>
        {/* </main> */}
      </Container>
    </Modal>
  )
}

