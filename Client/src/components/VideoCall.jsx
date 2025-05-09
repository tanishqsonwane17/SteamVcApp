// App.jsx or VideoCall.jsx
import {
  StreamVideoProvider,
  StreamCall,
  CallingState,
  StreamTheme,
  CallControls,
  SpeakerLayout,
} from '@stream-io/video-react-sdk';
import { createStreamClient } from './streamClient';

const apiKey = "your_api_key";
const user = { id: "ayush123", name: "Ayush" };
const token = "generated_token_from_backend";

const client = createStreamClient(apiKey, user, token);
const call = client.call('default', 'my-room-id');
call.join();

function VideoCall() {
  return (
    <StreamVideoProvider client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <SpeakerLayout />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </StreamVideoProvider>
  );
}
