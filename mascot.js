class Mascot {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.radius = 100;
        
        this.eyeX = 0;
        this.eyeY = 0;
        
        this.draw();
        this.bindEvents();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const deltaX = (mouseX - this.x) / 20;
            const deltaY = (mouseY - this.y) / 20;
            
            this.eyeX = Math.max(-5, Math.min(5, deltaX));
            this.eyeY = Math.max(-3, Math.min(3, deltaY));
            
            this.draw();
        });
    }
    
    draw() {
        const isDark = document.documentElement.classList.contains('dark');
        
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // 根据主题调整颜色
        this.ctx.fillStyle = isDark ? '#FFF700' : '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.drawEyes(isDark);
        this.drawSmile(isDark);
    }
    
    drawEyes(isDark) {
        this.ctx.fillStyle = isDark ? '#1a1a1a' : '#000000';
        
        // 左眼
        this.ctx.beginPath();
        this.ctx.arc(this.x - 40 + this.eyeX, this.y - 20 + this.eyeY, 8, 0, Math.PI * 2);
        this.ctx.fill();
        
        // 右眼
        this.ctx.beginPath();
        this.ctx.arc(this.x + 40 + this.eyeX, this.y - 20 + this.eyeY, 8, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    drawSmile(isDark) {
        this.ctx.strokeStyle = isDark ? '#1a1a1a' : '#000000';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y + 10, 60, 0.2 * Math.PI, 0.8 * Math.PI);
        this.ctx.stroke();
    }
} 