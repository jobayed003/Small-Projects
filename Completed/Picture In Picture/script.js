const videoElement = document.getElementById("video");
const button = document.getElementById("btn");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject = mediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.error(err);
  }
};
selectMediaStream();

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;

  // start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = true;
});
