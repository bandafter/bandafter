<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Main from './views/MainPoster.vue'
import LineUp from './views/LineUp.vue'
import Location from './views/LocationMap.vue'
import AboutView from './views/AboutView.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
// ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  console.log('')

  let panels = gsap.utils.toArray('.panel'),
    observer,
    scrollTween

  if (ScrollTrigger.isTouch === 1) {
    observer = ScrollTrigger.normalizeScroll(true)
  }

  // function goToSection(i) {
  //   scrollTween = gsap.to(window, {
  //     scrollTo: { y: i * innerHeight, autoKill: false },
  //     onStart: () => {
  //       if (!observer) return
  //       observer.disable() // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
  //       observer.enable()
  //     },
  //     duration: 1,
  //     onComplete: () => (scrollTween = null),
  //     overwrite: true,
  //   })
  // }

  // panels.forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     // start: 'top 50%',
  //     start: 'top bottom',
  //     end: '+=199%',
  //     markers: true,
  //     onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
  //   })
  // })

  // ScrollTrigger.create({
  //   start: 0,
  //   end: 'max',
  //   snap: 1 / (panels.length - 1),
  // })
})
</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/lineup">LineUp</RouterLink>
        <RouterLink to="/location">location</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <!-- <RouterView /> -->
  <div class="panels" id="panelContainer">
    <Main></Main>
    <LineUp></LineUp>
    <Location></Location>
    <!-- <AboutView></AboutView> -->
  </div>
</template>

<style lang="scss">
.panels {
  scroll-snap-type: y mandatory;
}
.panel {
  scroll-snap-align: start;
  will-change: transform;
}
</style>
