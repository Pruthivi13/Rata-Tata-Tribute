import darkImg from '../assets/dark.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="row flex-lg-row-reverse align-items-center g-4 p-5 m-4 bg-dark text-secondary">
        <div className="col-10 col-sm-8 col-lg-5">
          <img
            src={darkImg}
            className="d-block mx-lg-auto img-fluid tata-img"
            alt="Ratan Tata"
            width="400"
            loading="lazy"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold text-white lh-1 mb-3">RATAN TATA</h1>
          <hr className="border border-secondary border-2 opacity-50" />
          <div className="bold">Legacy of Excellence and Compassion.</div>
          <p className="tata-para fs-4">
            Sir Ratan Tata's journey is one of excellence, innovation, and
            compassion. Under his stewardship, the Tata Group has achieved
            unparalleled success, expanding its horizons across industries and
            continents. However, his contributions extend far beyond business
            achievements. Sir Ratan Tata's philanthropic endeavors, through
            the Tata Trusts and other charitable initiatives, have touched
            countless lives, promoting education, healthcare, rural
            development, and more.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
