// client/src/components/Call/VideoCall.jsx
import React, { useEffect, useState } from 'react';
import { StreamVideoProvider, StreamCall, CallingState, StreamTheme, CallControls, SpeakerLayout } from '@stream-io/video-react-sdk';
import { createStreamClient } from '../../services/stream';

const VideoCall = ({ apiKey, token, user }) => {
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null);

  useEffect(() => {
    // Create Stream Client
    const streamClient = createStreamClient(apiKey, user, token);
    setClient(streamClient);

    // Initialize and Join the Call
    const call = streamClient.call('default', 'room-id'); // Replace with actual room ID
    call.join();
    setCall(call);

    return () => {
      // Cleanup: Leave the call when component unmounts
      if (call) {
        call.leave();
      }
    };
  }, [apiKey, token, user]);

  if (!client || !call) return <div>Loading video call...</div>;

  return (
    <StreamVideoProvider client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <CallingState />
          <SpeakerLayout />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </StreamVideoProvider>
  );
};

export default VideoCall;
