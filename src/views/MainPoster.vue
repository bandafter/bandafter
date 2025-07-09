<script setup lang="ts">
import PosterImage from '@/assets/images/poster.png'
</script>

<template>
  <main>
    <div id="panel_1" class="panel h-dvh justify-items-center content-center justify-center flex">
      <div class="justify-self-center self-center">
        <img
          class="mask-y-from-93% mask-y-to-100% max-h-screen justify-center"
          :src="PosterImage"
        />
        <div class="fixed bottom-0 right-0 left-0">
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <!-- <mask class="mask-alpha" id="m">
              <g class="cloud1">
                <rect fill="#fff" width="100%" height="801" y="799" />
                <image
                  xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg"
                  width="100%"
                  height="100%"
                  class="opacity-25"
                />
              </g>
            </mask>
            <image
              class="cloud2 opacity-25"
              xlink:href="https://assets.codepen.io/721952/cloud2.png"
              width="100%"
              height="100%"
            />
            <image
              class="cloud1 opacity-25"
              xlink:href="https://assets.codepen.io/721952/cloud1.png"
              width="100%"
              height="100%"
            /> -->
            <!-- <image
              class="cloud3 opacity-25"
              xlink:href="https://assets.codepen.io/721952/cloud3.png"
              width="100%"
              height="100%"
            /> -->
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.panel:nth-child(1) {
  background-color: #1d1e26;
}
</style>
