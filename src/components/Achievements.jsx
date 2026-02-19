const achievements = [
  {
    title: 'Padma Bhushan',
    description: "One of India's highest civilian awards, given for distinguished service of a high order.",
    year: '2000',
  },
  {
    title: 'Padma Vibhushan',
    description: 'The second-highest civilian award in India, for exceptional and distinguished service.',
    year: '2008',
  },
  {
    title: 'Honorary Knight Commander of the Order of the British Empire (KBE)',
    description: 'For his services to UK-India relations, particularly in the fields of trade and investment.',
    year: '2009',
  },
  {
    title: 'Carnegie Medal of Philanthropy',
    description: 'Recognizing his dedication to philanthropy and making a difference in the lives of the underprivileged.',
    year: '2007',
  },
  {
    title: 'Ernst and Young Entrepreneur of the Year - Lifetime Achievement Award',
    description: 'For his exceptional contributions to the business world.',
    year: '2013',
  },
]

function Achievements() {
  return (
    <section className="achievement my-md-4 py-md-5 py-s-2 md-s-3">
      <div className="d-flex flex-column flex-md-row p-5 gap-4 py-md-5 align-items-center justify-content-center bg-dark">
        <h1 className="display-5 fw-bold text-white">ACHIEVEMENTS</h1>
        <hr className="border border-secondary border-2 opacity-50" />
        <div className="list-group">
          {achievements.map((item, index) => (
            <a
              key={index}
              href="#"
              className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark text-secondary"
              aria-current="true"
            >
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0 text-white">{item.title}</h6>
                  <p className="mb-0 opacity-75">{item.description}</p>
                </div>
                <small className="opacity-75 text-nowrap">{item.year}</small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
