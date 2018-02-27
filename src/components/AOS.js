import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ options }) => {
  // See more: https://github.com/michalsnik/aos
  const defaultOptions = {
    offset: 200,
    duration: 300,
    easing: 'ease-out-sine',
    delay: 0,
    once: true
  }
  AOS.init({ ...defaultOptions, ...options })
  return null
}
