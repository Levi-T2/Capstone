<template>
  <div class="container-fluid">
    <section class="row justify-content-start align-items-center">
      <div class="col-12 col-md-6 p-3 text-center">
        <p class="fs-1 text-light bg-header">Who is behind Auto-Tunes!</p>
      </div>
    </section>
    <div class="row justify-content-between text-center text-light">
      <div class="col-12 d-accord-holder">
        <!-- Levi Accordion -->
        <div class="col-12 col-md-3 p-2 profile-accord" title="See Details...">
          <div class="accordion" id="accordionOne">
            <div class="accordion-item">
              <div class="accordion-header">
                <a role="button" type="button" class="accordion-style d-flex flex-column" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <p class="fs-3 mb-0 text-light">Levi Tyler</p>
                  <img class="about-pic" src="https://ca.slack-edge.com/T1GGQN1RU-U05SMDWAK4N-76bc178a5f7b-512"
                    alt="Levi Tyler">
                </a>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionOne">
                <div class="accordion-body">
                  <p>I like burgers with cheese. I also like Vue but less than burgers.</p>
                  <div id="aboutLinks" class="d-flex align-items-center justify-content-around">
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-github"></i>
                    </a>
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Jaret Accordion -->
        <div class="col-12 col-md-3 p-2 profile-accord" title="See Details...">
          <div class="accordion" id="accordionTwo">
            <div class="accordion-item">
              <div class="accordion-header">
                <a role="button" type="button" class="accordion-style d-flex flex-column" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <p class="fs-3 mb-0 text-light">Jaret Hunemiller</p>
                  <img class="about-pic" src="https://ca.slack-edge.com/T1GGQN1RU-U05SMDY5QMU-7eae627dca79-512"
                    alt="Jaret Hunemiller">
                </a>
              </div>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionTwo">
                <div class="accordion-body">
                  <p>I like to eat cowboy burger and mulch.</p>
                  <div id="aboutLinks" class="d-flex align-items-center justify-content-around">
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-github"></i>
                    </a>
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Cody Accordion -->
        <div class="col-12 col-md-3 p-2 profile-accord" title="See Details...">
          <div class="accordion" id="accordionThree">
            <div class="accordion-item">
              <div class="accordion-header">
                <a role="button" type="button" class="accordion-style d-flex flex-column" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <p class="fs-3 mb-0 text-light">Cody Van</p>
                  <img class="about-pic" src="https://ca.slack-edge.com/T1GGQN1RU-U05TH34TSSC-65aa9e0d480a-512"
                    alt="Cody Van De Wetering">
                </a>
              </div>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionThree">
                <div class="accordion-body">
                  <p>I like to play COD but not with Jaret</p>
                  <div id="aboutLinks" class="d-flex align-items-center justify-content-around">
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-github"></i>
                    </a>
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Jarek Accordion -->
        <div class="col-12 col-md-3 p-2 profile-accord" title="See Details...">
          <div class="accordion" id="accordionFour">
            <div class="accordion-item">
              <div class="accordion-header">
                <a role="button" type="button" class="accordion-style d-flex flex-column" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <p class="fs-3 mb-0 text-light">Jarek Garcia</p>
                  <img class="about-pic" src="https://ca.slack-edge.com/T1GGQN1RU-U05TH35NEG0-90fd79345752-512"
                    alt="Jarek Garcia">
                </a>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFour">
                <div class="accordion-body">
                  <p>I love working at best buy, they give me really good hours and its never boring</p>
                  <div id="aboutLinks" class="d-flex align-items-center justify-content-around">
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-github"></i>
                    </a>
                    <a href="" class="text-dark fs-2 p-1 link-buttons">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- <div class="row text-center p-5">
      <div class="col-12">
        <p class="fs-4 text-light">Do you like fast cars? Well so do We! This application was made to appreciate the
          people who spend their hard time working on all of these different street cars to share to the public and give
          their insight on other peoples builds!</p>
      </div>
    </div> -->
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.transparent-bg {
  background-color: rgba(0, 0, 0, 0.499);
}

.bg-header {
  background-color: #021e38;
  border-radius: 10px;
  border: 1px solid gainsboro;
}

.underline {
  text-decoration: underline white;
}

.about-pic {
  height: 58dvh;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  object-fit: cover;
  object-position: center;
}

.profile-accord {
  transition: ease-in-out 0.275s;
}

.profile-accord:hover {
  transform: translateY(-0.2em);
}

.link-buttons {
  transition: ease-in-out .275s;
}

.link-buttons:hover {
  transform: translateY(-0.25em);
}

.d-accord-holder {
  display: flex;
}

.accordion-style {
  background-color: #021e38;
  border-radius: 3px;
  padding: 1rem;
  box-shadow: 0px 0px 6px 5px rgba(220, 220, 220, 0.356);
}



@media (max-width:(768px)) {
  .d-accord-holder {
    flex-direction: column
  }
}
</style>