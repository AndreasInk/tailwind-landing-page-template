import React, { useState, useRef } from 'react';
import axios from 'axios';

const Chat = () => {
  const [recording, setRecording] = useState(false);
  const mediaRecorder = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();

        const audioChunks = [];
        mediaRecorder.current.addEventListener('dataavailable', (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.current.addEventListener('stop', () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          sendAudio(audioBlob);
        });

        setRecording(true);
      })
      .catch((err) => console.error('Error accessing the microphone:', err));
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };
  

  const sendAudio = async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'audio.wav');

      const response = await axios.post(
        'http://127.0.0.1:5000/synthesize',
        formData,
        {
          responseType: 'blob',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
          },
          credentials: 'same-origin',
        }
      );
      playAudio(response.data);
    } catch (error) {
      console.error('Error sending audio:', error);
    }
  };

  const playAudio = (blob) => {
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div>
      {!recording && <button onClick={startRecording}>Start Recording</button>}
      {recording && <button onClick={stopRecording}>Stop Recording</button>}
    </div>
  );
};

export default Chat;
