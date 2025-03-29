class Captcha {
    constructor(canvasId, inputId, submitId, refreshId, contentId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.input = document.getElementById(inputId);
        this.submit = document.getElementById(submitId);
        this.refresh = document.getElementById(refreshId);
        this.content = document.getElementById(contentId);
        this.captchaCode = this.generateCaptchaCode();
        this.drawCaptcha(this.captchaCode);
        this.showCaptchaModal();
        this.addEventListeners();
    }

    generateCaptchaCode() {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            let char = chars.charAt(Math.floor(Math.random() * chars.length));
            code += char;
        }
        return code;
    }

    drawCaptcha(code) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'black';

        // Add some noise to the canvas
        for (let i = 0; i < 500; i++) {
            let x = Math.floor(Math.random() * this.canvas.width);
            let y = Math.floor(Math.random() * this.canvas.height);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(x, y, 1, 1);
        }

        // Draw some random lines
        for (let i = 0; i < 10; i++) {
            let x1 = Math.floor(Math.random() * this.canvas.width);
            let y1 = Math.floor(Math.random() * this.canvas.height);
            let x2 = Math.floor(Math.random() * this.canvas.width);
            let y2 = Math.floor(Math.random() * this.canvas.height);
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }

        // Draw the captcha code with some distortion
        let fontSizes = [18, 20, 22, 24, 26, 28];
        let fonts = ['Arial', 'Comic Sans MS', 'Courier New', 'Helvetica', 'Impact', 'Tahoma'];
        let colors = ['#111', '#222', '#333', '#444', '#555', '#666'];
        for (let i = 0; i < code.length; i++) {
            let x = 20 + (i * 30);
            let y = 25 + Math.sin(i * 0.5) * 10;
            let angle = Math.random() * 0.5 - 0.25;
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(angle);
            this.ctx.font = fontSizes[Math.floor(Math.random() * fontSizes.length)] + 'px ' + fonts[Math.floor(Math.random() * fonts.length)];
            this.ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            this.ctx.fillText(code[i], 0, 0);
            this.ctx.restore();
        }
    }

    showCaptchaModal() {
        document.getElementById('captcha-modal').classList.add('show');
    }

    addEventListeners() {
        this.submit.addEventListener('click', () => {
            // Get the user's input
            let userInput = this.input.value;

            // Check if the user's input matches the captcha code
            if (userInput.toLowerCase() === this.captchaCode.toLowerCase()) {
                // Hide the captcha modal
                document.getElementById('captcha-modal').classList.remove('show');

                // Show the content
                this.content.style.display = 'block';
            } else {
                // Display an error message
                document.getElementById('captcha-error').innerText = 'Invalid captcha code. Please try again.';
            }
        });

        this.refresh.addEventListener('click', () => {
            // Generate a new captcha code
            this.captchaCode = this.generateCaptchaCode();
            this.drawCaptcha(this.captchaCode);
            this.input.value = '';
            document.getElementById('captcha-error').innerText = '';
        });
    }
}

let captcha = new Captcha('captcha-canvas', 'captcha-input', 'captcha-submit', 'captcha-refresh', 'content');
