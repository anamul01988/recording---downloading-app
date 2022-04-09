import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import './RecordApp.css';
const RecordApp = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true }); 
  return (
    <div className="container">
      <div className="record-app">
        <p>{status}</p>

        <video src={mediaBlobUrl} controls autoPlay loop />
        <div className="record-content d-flex justify-content-center align-items-center my-4">
          <button className="me-3" onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
        </div>
      </div>
    </div>
  );
};

export default RecordApp;
