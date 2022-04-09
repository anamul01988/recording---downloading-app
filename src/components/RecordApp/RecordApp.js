import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import './RecordApp.css';
const RecordApp = () => {
  const {mediaBlobUrl, status, startRecording, stopRecording, resumeRecording, pauseRecording } =
    useReactMediaRecorder({ screen: true }); 

  return (
    <div className="container">
      <div className="record-app">
        <p>{status}</p>

        <video src={mediaBlobUrl} controls autoPlay />
        <div className="record-content d-flex justify-content-center align-items-center flex-wrap my-4 ">
          <button className="me-3 mt-3" onClick={startRecording}>Start Recording</button>
          <button className="me-3 mt-3" onClick={stopRecording}>Stop Recording</button>
          <button className="me-3 mt-3" onClick={pauseRecording}>Pause Recording</button>
         <button className="mt-3" onClick={resumeRecording}>Resume Recording</button>
        </div>
      </div>
    </div>
   
  );
};

export default RecordApp;
