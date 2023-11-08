<template>
  <div class="container-fluid background">
    <div class="row">

      <div class="col-12 text-center p-5">
        <p class="fs-1 text-light underline">Who is behind Auto-Tunes!</p>
      </div>
    </div>

    <div class="row justify-content-between text-center text-light">

      <div class="col-3">
        <img class="rounded-circle" src="https://ca.slack-edge.com/T1GGQN1RU-U05SMDWAK4N-76bc178a5f7b-512"
          alt="levi tyler">
        <p class="fs-3">Levi Tyler</p>
        <p class="fs-5">I ❤️ Jeep</p>
      </div>

      <div class="col-3">
        <img class="rounded-circle" src="https://ca.slack-edge.com/T1GGQN1RU-U05SMDY5QMU-7eae627dca79-512" alt="">
        <p class="fs-3">Jaret Hunemiller</p>
        <p class="fs-5">I ❤️ Dodge</p>
      </div>

      <div class="col-3">
        <img class="rounded-circle" src="https://ca.slack-edge.com/T1GGQN1RU-U05TH34TSSC-65aa9e0d480a-512" alt="">
        <p class="fs-3">Cody Van DeWetering</p>
        <p class="fs-5">I ❤️ Honda</p>
      </div>

      <div class="col-3">
        <img class="rounded-circle" src="https://ca.slack-edge.com/T1GGQN1RU-U05TH35NEG0-90fd79345752-512" alt="">
        <p class="fs-3">Jarek Garcia</p>
        <p class="fs-5">I ❤️ Toyota</p>
      </div>

    </div>

    <div class="row text-center p-5">
      <div class="col-12">
        <p class="fs-4 text-light">We decided to build this application for the general public that was looking for a new
          car or
          truck! This
          application allows you to explore all the different car brands and models that there are in the world to really
          understand what and find a vehicle that fits you best! Between comparison of the cars you pick and being able to
          view hundreds of cars, it should feel like a 60's car catalog all over again.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
img {
  width: 55%;
  height: 25vh;
  border: 5px solid black;
  object-fit: cover;
}

.background {
  background-image: url(https://th.bing.com/th/id/OIP.zS-LbwWTdBfHFUKwTa4qGwHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.underline {
  text-decoration: underline white;
}
</style>