import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "2cab5076e54e4f0d9d0c2092780f24fa";
const token =  "0062cab5076e54e4f0d9d0c2092780f24faIADilxfEb1obeVsuyLCbyK8HPv9H3l8oGsh6gn3/r1dBG7wtXxcAAAAAEACJVdSDSk20YgEAAQBHTbRi";


export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Beare Ptcp";