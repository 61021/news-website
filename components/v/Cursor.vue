<script setup lang="ts">
import gsap from 'gsap'

const cursor = ref<HTMLElement | null>(null)
const ball = ref<HTMLElement | null>(null)

const { x, y, pressure } = usePointer()

const isLeft = usePageLeave()

const { isHovering } = storeToRefs(useCursorStore())

watch(isLeft, (value) => {
  if (value)
    cursor.value?.style.setProperty('opacity', '0')
  else
    cursor.value?.style.setProperty('opacity', '1')
})

watch([pressure, isHovering], ([value, value2]) => {
  if (value > 0 || value2)
    ball.value?.style.setProperty('transform', 'scale(2)')
  else
    ball.value?.style.setProperty('transform', 'scale(1)')
})

onMounted(() => {
  gsap.set('.flair', { xPercent: -50, yPercent: -50 })

  const xTo = gsap.quickTo('.flair', 'x', { duration: 0.01, ease: 'ease' })
  const yTo = gsap.quickTo('.flair', 'y', { duration: 0.01, ease: 'ease' })

  watch(x, value => xTo(value))
  watch(y, value => yTo(value))
})
</script>

<template>
  <div
    ref="cursor"
    class="flair pointer-events-none fixed left-0 top-0 z2004690461400 hidden origin-center rounded-full p2 lg:block"
  >
    <svg
      id="svg2"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      sodipodi:docname="Pixel Mouse Cursor Arow (Fixed).svg"
      viewBox="0 0 600.00001 950"
      version="1.1"
      inkscape:version="0.91 r13725"
      width="20"
      height="37.5"
      class="translate-x-2 translate-y-3"
    >
      <defs
        id="defs133"
      />
      <sodipodi:namedview
        id="base"
        fit-margin-left="0"
        inkscape:showpageshadow="false"
        inkscape:zoom="0.35355339"
        height="0px"
        borderopacity="1.0"
        inkscape:current-layer="layer2"
        inkscape:cx="586.85237"
        inkscape:cy="-31.298198"
        inkscape:object-paths="true"
        fit-margin-right="0"
        inkscape:window-maximized="1"
        inkscape:snap-bbox="true"
        showgrid="false"
        width="0px"
        inkscape:document-units="px"
        bordercolor="#666666"
        inkscape:window-x="0"
        inkscape:window-y="19"
        fit-margin-bottom="0"
        inkscape:window-width="1920"
        inkscape:pageopacity="0.0"
        inkscape:pageshadow="2"
        pagecolor="#ffffff"
        inkscape:bbox-paths="true"
        inkscape:bbox-nodes="true"
        inkscape:window-height="1061"
        showborder="false"
        fit-margin-top="0"
      />
      <g
        id="layer2"
        inkscape:label="Layer"
        inkscape:groupmode="layer"
        transform="translate(-555.1899,-182.7993)"
      >
        <path
          id="rect3134"
          style="fill:#000000;fill-opacity:1"
          d="m 555.19,182.7993 0,850.0038 99.99801,0 0,-49.99816 -0.0572,0 0.0572,-0.0357 49.999,0 0,-49.99812 49.999,0 0,-49.99812 49.99901,0 0,99.99624 49.999,0 0.73359,0 -0.73359,100.03196 49.999,0 0,49.9981 99.99798,0 0,-49.9981 49.999,0 0,-99.99626 -49.999,0 -0.7336,-0.0357 0.7336,-99.99624 -49.99897,0 0,-49.99812 200.00787,0 0,-49.99812 0,-49.99812 -49.999,0 0,0.069 -0.012,-0.069 0,-49.99812 -49.999,0 0,-49.99811 -49.999,0 0,-49.99812 -49.99897,0 0,-49.99812 -49.99901,0 0,-49.99812 -49.999,0 0,-49.99812 -49.999,0 0,-49.99812 -49.99901,0 0,-49.99812 -49.999,0 0,-49.99812 -49.999,0 0,-49.99812 -49.99901,0 0,-49.99812 -49.999,0 z"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
        />
        <path
          id="rect56"
          style="fill:#ffffff;fill-opacity:1"
          d="m 50,99.996094 0,699.974606 49.998047,0 0,-49.99804 50.000003,0 0,-49.99805 49.99804,0 0,-50 50,0 0,50 49.99805,0 0,99.99609 49.99805,0 0,100.03125 99.99804,0 0,-99.99609 -49.99804,0 0,-100.03125 -50,0 0,-99.99805 199.99609,0 0,-49.99804 -49.99805,0 0,-49.99805 -50,0 0,-49.99805 -49.99804,0 0,-49.99804 -50,0 0,-49.99805 -49.99805,0 0,-49.99805 -49.99805,0 0,-49.99805 -50,0 0,-49.99804 -49.99804,0 0,-49.99805 -50.000003,0 0,-49.998046 z"
          transform="translate(555.1899,182.7993)"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccc"
        />
      </g>
    </svg>
  </div>
</template>
