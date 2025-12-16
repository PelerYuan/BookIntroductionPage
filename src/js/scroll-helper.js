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

  // 键盘导航支持 - 已禁用，允许默认键盘滚动
  addKeyboardNavigation() {
    // 键盘滚动限制已移除，允许使用默认的键盘滚动行为
  }

  // 触摸手势支持 - 已禁用，允许自由触摸滚动
  addTouchSupport() {
    // 触摸滚动限制已移除，允许正常的触摸滚动行为
  }

  // 添加鼠标滚轮优化 - 已禁用，允许自由滚动
  addWheelOptimization() {
    // 滚动限制已移除，允许正常的页面滚动
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


