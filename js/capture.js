// Get references to the canvas and button elements
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture-button');
const content = document.getElementById('content');

let videoStream = null;

// Add an event listener to the capture button
captureButton.addEventListener('click', async () => {
    if (videoStream === null) {
        try {
            // Get access to the user's webcam
            videoStream = await navigator.mediaDevices.getUserMedia({ video: true });

            // Create a video element to display the webcam feed
            const video = document.createElement('video');
            video.srcObject = videoStream;
            video.play();

            // Add an event listener to the video element
            video.addEventListener('canplay', () => {
                // Draw the current video frame onto the canvas
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

                // Display the content
                content.style.display = 'block';

                // Stop the webcam feed
                videoStream.getTracks()[0].stop();
            });
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    }
});
