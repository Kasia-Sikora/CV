type Challenge = {
  name: string
  stack: string
  img: string
  repo: string
}

const challenges: Challenge[] = [
  {
    name: 'Rock Paper Scissors',
    stack: 'HTML · SCSS · JS',
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/FA-Rock-Paper-Scissors/main/src/images/Screenshot.png',
    repo: 'https://github.com/Kasia-Sikora/FA-Rock-Paper-Scissors',
  },
  {
    name: 'Room Homepage',
    stack: 'HTML · SCSS · JS',
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/FA-room-homepage/main/src/images/Screenshot.png',
    repo: 'https://github.com/Kasia-Sikora/FA-room-homepage',
  },
  {
    name: 'Social Proof',
    stack: 'HTML · SCSS',
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/FA-social-proof/main/assets/Screenshot.png',
    repo: 'https://github.com/Kasia-Sikora/FA-social-proof',
  },
  {
    name: 'Testimonial Grid',
    stack: 'HTML · CSS',
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/FA-TestimonialGrid/main/src/assets/Screenshot.png',
    repo: 'https://github.com/Kasia-Sikora/FA-testimonials-grid-section',
  },
]

const FrontendChallenges = () => {
  return (
    <>
      <p>A collection of Frontend Mentor challenge solutions — responsive layouts built pixel-precise from design
        specs.</p>
      <p className="challengesHint">{challenges.length} solutions — click any to view its repo on GitHub.</p>

      <div className="challengesGrid">
        {challenges.map((challenge) => (
          <a key={challenge.name} className="challengeCard" href={challenge.repo} target="_blank" rel="noreferrer">
            <img src={challenge.img} alt={challenge.name} />
            <div className="challengeCardBody">
              <h5>{challenge.name}</h5>
              <div className="challengeStack">{challenge.stack}</div>
              <span className="challengeLink">View on GitHub ↗</span>
            </div>
          </a>
        ))}
      </div>

      <h4>Description:</h4>
      <p>These are solutions to challenges from <a href="https://www.frontendmentor.io" target="_blank" rel="noreferrer">Frontend
        Mentor</a> — small, self-contained builds where the goal is to match a professional design spec exactly and make
        it fully responsive.</p>

      <h4>My goals:</h4>
      <ul>
        <li>Practice building quick, simple site from design example</li>
        <li>Develop skills in SCSS</li>
        <li>Develop skills in JavaScript</li>
        <li>Develop skills in RWD</li>
      </ul>
    </>
  )
}

export default FrontendChallenges
