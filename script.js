const videoElement = document.getElementById("Video");
const button = document.getElementById("Button");

//Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const medaiStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = MediaStream;
    videoElement.onloadermetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch Error Here
    console.log("whoops, error here:", error);
  }
}

//On Load
selectMediaStream();
