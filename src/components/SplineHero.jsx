import SplineScene from './SplineScene'

function SplineHero() {
  return (
    <section className="spline-hero">
      {/* 3D Background */}
      <div className="spline-hero-bg">
        <SplineScene
          sceneUrl="https://my.spline.design/r4xbot-785oMKzIbbaYKtARIQ5EaHft/"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Text overlay */}
      <div className="spline-hero-overlay">
        <h1 className="spline-hero-title">A TRIBUTE TO</h1>
        <h1 className="spline-hero-name">RATAN TATA</h1>
        <p className="spline-hero-subtitle">
          Visionary. Philanthropist. Legend.
        </p>
      </div>
    </section>
  )
}

export default SplineHero
