// --- Particles Effect Code ---
// Particles Effect
const body = document.body;
const canvas = document.createElement('canvas'); // Create the canvas dynamically
canvas.id = 'particleCanvas'; // Set ID for the canvas (to target in CSS)
body.appendChild(canvas); // Append canvas to the body
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;
// Get Mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Create Particle class
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#8C5523';
        ctx.fill();
    }

    // Update particle position
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Check collision with mouse position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 2;  // Further reduced from 5
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 2;  // Further reduced from 5
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 2;  // Further reduced from 5
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 2;  // Further reduced from 5
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    let numberofParticles = (canvas.height * canvas.width) / 16000; // Reduced number of particles
    for (let i = 0; i < numberofParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1; // Reduced speed even more
        let directionY = (Math.random() * 2) - 1; // Reduced speed even more
        let color = '#8C5523';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Check if particles are close enough to draw lines between them
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 10) * (canvas.height / 10)) { // Reduced distance threshold for lines
                opacityValue = 1 - (distance / 15000); // Reduced opacity range
                ctx.strokeStyle = 'rgba(140,85,31,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Resize event
window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = this.innerHeight;
    mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
    init();
});

// Mouse out event
window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});


// Detect if the device is mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Trigger particle effect automatically on mobile
if (isMobileDevice()) {
    window.dispatchEvent(new MouseEvent('mousemove', {
        clientX: window.innerWidth / 2, // Simulate the mouse at the center of the screen
        clientY: window.innerHeight / 2
    }));
}


init();
animate();











// --- Smooth Scroll JS --- 
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll to Sections
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});




// --- Your Existing JS Code ---
// Any other code for gradient effects, URL redirection, click ripple, etc.



function redirectToURL() {
    var urlToRedirect = "https://calendly.com/clickkmedia/30min?fbclid=PAAaaV-CAq3Kql6HbhGflDZH9j9cGIfkL0IaUDJGqpORKSvgAh9HQnR4t2M_E&month=2024-02"; // Replace with your desired URL
    window.location.href = urlToRedirect;
}

// Get all elements with the specified class
var elements = document.getElementsByClassName("book-call");

// Attach the click event to each element
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = redirectToURL;
}


function click1(){
    window.open("https://www.youtube.com/@JamesyMCYT")
   }

   
function click2(){
    window.open("https://www.youtube.com/@dreamsofcode/featured")
   }

   
function click3(){
    window.open("https://www.youtube.com/@BlushhYT")
   }

   
function click4(){
    window.open("https://www.youtube.com/@ByteNotes")
   }

function click5(){
    window.open("https://www.youtube.com/@BowersOptimal")
   }

function click6(){
    window.open("https://www.instagram.com/joinautopilot_/")
   }

function click7(){
    window.open("https://www.instagram.com/rjpepino/")
   }

function click8(){
    window.open("https://www.instagram.com/alec_schaal")
   }
function click9(){
    window.open("https://www.instagram.com/addamcirbo/")
   }



   let currentXPercentage = 0.5;
   let currentYPercentage = 0.5;
   
   function smoothGradientEffect() {
       // Capture the mouse position
       let mouseX = event.clientX;
       let mouseY = event.clientY;
   
       let maxWidth = window.innerWidth;
       let maxHeight = window.innerHeight;
   
       // Calculate the percentage of mouse position
       let xPercentage = mouseX / maxWidth;
       let yPercentage = mouseY / maxHeight;
   
       // Smoothly transition the xPercentage and yPercentage
       currentXPercentage += (xPercentage - currentXPercentage) * 0.1; // Smooth interpolation
       currentYPercentage += (yPercentage - currentYPercentage) * 0.1; // Smooth interpolation
   
       // Create dynamic gradient based on smoothed mouse position
       let gradientStart = `rgba(36, 13, 47, ${0.6 + 0.4 * (1 - currentXPercentage)})`; // Dark color increases near the left
       let gradientEnd = `rgba(10, 19, 31, ${0.6 + 0.4 * currentXPercentage})`; // Light color increases near the right
   
       // Apply the gradient based on the smoothed mouse position
       document.body.style.background = `linear-gradient(${(currentXPercentage * 360)}deg, ${gradientStart}, ${gradientEnd})`;
   
       // Request next animation frame for smoother updates
       requestAnimationFrame(smoothGradientEffect);
   }
   
   // Start the smooth gradient effect
   window.addEventListener('mousemove', smoothGradientEffect);


   document.addEventListener('click', (e) => {
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');

    // Position the ripple at the mouse click
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // Set ripple color (you can adjust the color for your gradient effect)
    ripple.style.width = ripple.style.height = '20px';
    ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(36, 13, 47, 0) 70%)';

    // Append ripple to body
    document.body.appendChild(ripple);

    // Remove the ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
});




   
