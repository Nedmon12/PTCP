import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "2cab5076e54e4f0d9d0c2092780f24fa";
const token =  "0062cab5076e54e4f0d9d0c2092780f24faIADz8FYZxdkwPHqsQSpKT+yPptGIzweWpDoR2C9j80YNEWH6sGkAAAAAEABGROOetySyYgEAAQC2JLJi";


export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "BearePTCP Conference";