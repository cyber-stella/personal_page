import { useEffect, useRef } from 'react'

const Mascot = ({ isDark }) => {
  const canvasRef = useRef(null)
  const mascotRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateCanvasSize = () => {
      const container = canvas.parentElement
      const size = Math.min(container.offsetWidth, 400)
      canvas.width = size
      canvas.height = size
      
      if (mascotRef.current) {
        mascotRef.current.updateSize(size)
      }
    }

    const mascot = new MascotClass(canvas)
    mascotRef.current = mascot

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])

  useEffect(() => {
    if (mascotRef.current) {
      mascotRef.current.draw()
    }
  }, [isDark])

  return (
    <div className="relative w-[300px] md:w-[400px] aspect-square animate-float flex-shrink-0">
      <canvas 
        ref={canvasRef}
        className="w-full h-full transition-transform duration-300"
      />
    </div>
  )
}

class MascotClass {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.updateSize(canvas.width)
    this.draw()
    this.bindEvents()
  }

  updateSize(size) {
    this.width = size
    this.height = size
    this.x = this.width / 2
    this.y = this.height / 2
    this.radius = size * 0.25
    this.draw()
  }
  
  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      const deltaX = (mouseX - this.x) / 20
      const deltaY = (mouseY - this.y) / 20
      
      this.eyeX = Math.max(-5, Math.min(5, deltaX))
      this.eyeY = Math.max(-3, Math.min(3, deltaY))
      
      this.draw()
    })
  }
  
  draw() {
    const isDark = document.documentElement.classList.contains('dark')
    
    this.ctx.clearRect(0, 0, this.width, this.height)
    
    this.ctx.fillStyle = isDark ? '#FFF700' : '#FFD700'
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this.ctx.fill()
    
    this.drawEyes(isDark)
    this.drawSmile(isDark)
  }
  
  drawEyes(isDark) {
    this.ctx.fillStyle = isDark ? '#1a1a1a' : '#000000'
    
    this.ctx.beginPath()
    this.ctx.arc(this.x - 40 + this.eyeX, this.y - 20 + this.eyeY, 8, 0, Math.PI * 2)
    this.ctx.fill()
    
    this.ctx.beginPath()
    this.ctx.arc(this.x + 40 + this.eyeX, this.y - 20 + this.eyeY, 8, 0, Math.PI * 2)
    this.ctx.fill()
  }
  
  drawSmile(isDark) {
    this.ctx.strokeStyle = isDark ? '#1a1a1a' : '#000000'
    this.ctx.lineWidth = 4
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y + 10, 60, 0.2 * Math.PI, 0.8 * Math.PI)
    this.ctx.stroke()
  }
}

export default Mascot 