function SplineScene({ sceneUrl, style }) {
  return (
    <div className="spline-container" style={style}>
      <iframe
        src={sceneUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        title="3D Scene"
        style={{
          border: 'none',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}

export default SplineScene
