document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentSlideEl = document.getElementById('current-slide');
    const progressBar = document.getElementById('progress-bar');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    const totalSlidesEl = document.getElementById('total-slides');
    if(totalSlidesEl) totalSlidesEl.textContent = totalSlides;
    
    // Initialize
    updateSlides();
    
    // Event Listeners
    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            goNext();
        } else if (e.key === 'ArrowLeft') {
            goPrev();
        }
    });
    
    function goNext() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlides();
        }
    }
    
    function goPrev() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    }
    
    function updateSlides() {
        // Update slides classes
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index < currentSlide) {
                slide.classList.add('prev');
            }
        });
        
        // Update counters and buttons
        currentSlideEl.textContent = currentSlide + 1;
        
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        
        // Update progress bar
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }
});
