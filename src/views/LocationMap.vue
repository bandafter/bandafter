<script setup lang="ts">
// @ts-nocheck
import { onMounted } from 'vue'

onMounted(() => {
  const mapOptions = {
    center: new naver.maps.LatLng(37.5509229, 126.9210652),
    // zoom: 15,
  }

  const map = new naver.maps.Map('map', mapOptions)
  const tileSize = map.getMapType().tileSize.width
  const projection = map.getProjection()
  const center = map.getCenter()
  const zoom = map.getZoom()
  const centerPixel = projection.fromCoordToPoint(center)
  const xPixel = Math.floor(projection.scaleUp(centerPixel.x, zoom))
  const yPixel = Math.floor(projection.scaleUp(centerPixel.y, zoom))
  const xIndex = Math.floor(xPixel / tileSize)
  const yIndex = Math.floor(yPixel / tileSize)

  const marker = new naver.maps.Marker({
    map: map,
    position: map.getCenter(),
  })
})
</script>

<template>
  <div class="map panel h-dvh justify-items-center content-center px-10">
    <div></div>
    <div id="map" style="width: 90%; height: 50%"></div>
    <h3>서울 마포구 어울마당로 65 상상마당빌딩</h3>
    <div>
      <ul>
        <li>
          KT&G 상상마당 홍대는 별도의 주차공간이 없습니다. 가급적 대중교통수단을 이용 바랍니다.
        </li>
        <li>지하철 : 2호선 홍대입구역 9번 출구 2호선 합정역 3번 출구 6호선 상수역 1번 출구</li>
        <li>버스 : 마을버스 마포08, 마포16, 초록(지선)버스 7011</li>
        <li>
          자가용 : 주소검색 - 서울시 마포구 어울마당로 65 (서교동 367-5) 명칭검색 - KT&G 상상마당
          홍대
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
