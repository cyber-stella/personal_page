// 初始化看板娘
const canvas = document.getElementById('mascot');
const mascot = new Mascot(canvas);

// 检查系统主题偏好并设置初始主题
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// 切换暗色模式
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const themeBtn = document.getElementById('theme-btn');
    const icon = themeBtn.querySelector('i');
    
    if (document.documentElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// 打开简历PDF
function openResume() {
    window.open('resume.pdf', '_blank');
} 