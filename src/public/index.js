const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const SLIDE_LENGTH = 3

const nextBtn = $('.next')
const prevBtn = $('.prev')
const slideImage = $('.slide-image')
const slideImages = $$('.slide-image')
const dots = $$('.dot')

const slide = {
  currentSlideIndex: 0,
  loadCurrentSlide: function () {
    slideImages.forEach((image) => {
      image.style.display = 'none'
    })
    dots.forEach((dot) => {
      dot.classList.remove('active')
    })
    slideImages[this.currentSlideIndex].style.display = 'block'
    dots[this.currentSlideIndex].classList.add('active')
  },
  next: function () {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % SLIDE_LENGTH
  },
  prev: function () {
    this.currentSlideIndex--
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = SLIDE_LENGTH - 1
    }
  },
  handleEvent: function () {
    nextBtn.onclick = () => {
      this.next()
      this.loadCurrentSlide()
    }
    prevBtn.onclick = () => {
      this.prev()
      this.loadCurrentSlide()
    }
    dots.forEach((dot, index) => {
      dot.onclick = () => {
        this.currentSlideIndex = index
        this.loadCurrentSlide()
      }
    })
  },
  automaticallyUpdate: function () {
    setInterval(() => {
      this.next()
      this.loadCurrentSlide()
    }, 5000)
  },
  start: function () {
    this.loadCurrentSlide()
    this.handleEvent()
    this.automaticallyUpdate()
  },
}

slide.start()
