// 滚动辅助功能
class ScrollHelper {
  constructor() {
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.init();
  }

  init() {
    // 添加键盘导航支持
    this.addKeyboardNavigation();
    
    // 添加触摸手势支持
    this.addTouchSupport();
    
    // 添加鼠标滚轮优化
    this.addWheelOptimization();
    
    // 优化滚动性能
    this.optimizeScrollPerformance();
  }

  // 键盘导航支持
  addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        this.scrollToNextSection();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        this.scrollToPreviousSection();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.scrollToSection(document.querySelectorAll('.section').length - 1);
      }
    });
  }

  // 触摸手势支持
  addTouchSupport() {
    let startY = 0;
    let startTime = 0;

    document.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      startTime = Date.now();
    });

    document.addEventListener('touchend', (e) => {
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      const deltaY = startY - endY;
      const deltaTime = endTime - startTime;

      // 快速滑动检测
      if (deltaTime < 300 && Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          this.scrollToNextSection();
        } else {
          this.scrollToPreviousSection();
        }
      }
    });
  }

  // 添加鼠标滚轮优化
  addWheelOptimization() {
    let isScrolling = false;
    let scrollTimeout;

    document.addEventListener('wheel', (e) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // 检测滚动方向
      const delta = e.deltaY;
      const threshold = 50; // 滚动阈值

      if (Math.abs(delta) > threshold) {
        isScrolling = true;
        
        if (delta > 0) {
          this.scrollToNextSection();
        } else {
          this.scrollToPreviousSection();
        }

        // 防止快速连续滚动
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    }, { passive: false });
  }

  // 滚动到下一个部分
  scrollToNextSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = this.getCurrentSection();
    const nextIndex = Math.min(currentSection + 1, sections.length - 1);
    this.scrollToSection(nextIndex);
  }

  // 滚动到上一个部分
  scrollToPreviousSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = this.getCurrentSection();
    const prevIndex = Math.max(currentSection - 1, 0);
    this.scrollToSection(prevIndex);
  }

  // 滚动到指定部分
  scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
      // 使用更精确的滚动定位
      const targetSection = sections[index];
      const targetRect = targetSection.getBoundingClientRect();
      const targetTop = targetRect.top + window.scrollY;
      
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
      
      // 滚动完成后确保对齐
      setTimeout(() => {
        targetSection.scrollIntoView({ 
          behavior: 'auto',
          block: 'start'
        });
      }, 500);
    }
  }

  // 获取当前部分索引
  getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        return i;
      }
    }
    return 0;
  }

  // 优化滚动性能
  optimizeScrollPerformance() {
    let ticking = false;
    
    const updateScrollIndicator = () => {
      // 更新滚动指示器的逻辑已经在 ScrollIndicator 组件中实现
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollIndicator);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  new ScrollHelper();
});


