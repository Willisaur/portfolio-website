import './Home.css';

function Home() {
  return (
    <div className='home'>
      <header>
        <h1>Hi there! 👋 I'm Will.</h1>
        <img className="photo-selfie" src="./images/pfp.jpg" alt="Selfie with mountain background"></img>
        <h2>Nice to meet you!</h2>
        <ul>
          <li>❤️ Thanks for visiting my website. I hope I can help you!</li>
          <li>💬 Don't be afraid to contact me or ask me about my faith in Jesus Christ!</li>
        </ul>
      </header>

      <section className='skills'>
        <h2>Here's a bit about me.</h2>
        <h3>Skills</h3>
        <ul>
          <li>🔭 Practicing: Data structures & algorithms, competitive programming</li>
          <li>🌱 Learning: Swift, C#, Assembly, SQL, computer architecture, databases</li>
          <li>🤔 Experienced: Python, C++, Java, HTML/CSS/JS/PHP</li>
        </ul>
      </section>

      <section className='goals'>
        <h3>My Goals</h3>
        <p>
          I aim to glorify God in all I do. I love to learn, create, and serve. I am especially passionate about automation, software creation, and entrepreneurship.
        </p>
        <p>
          I am an honors CS student at Liberty University with focuses in software engineering & data science. I'm vice president of the Competitive Programming Club. I graduate in 2026. 
        </p>

        <p>
          I've had two summer internships so far. As I finish my sophomore year, I hope to intern in Washington, D.C. through a fellowship with my university. If it is the Lord's Will, I would love to work in big tech in the city for a few years after I graduate.
        </p>
      </section>

      <section className="passions">
        <h3>My Passions</h3>
        <p>
          I've always loved technology -- for my reading log in elementary school, I read an iPhone user manual. When I was 10, I started coding; I learned basic networking and programming from Minecraft servers. In high school, I took five programming classes, and now, I am blessed to study CS full-time in college in VA (go flames!)!
        </p>
        <p>
          One of the reasons why I specifically love programming is that I see many parallels with God creating the universe. With His knowledge and wisdom, He simply spoke all of creation into existence, and all of creation was good!. In the same way, I can mirror the Creator through creativity. I use my coding knowledge; I create, and my creation is good.
        </p>
      </section>
    </div>
  );
}

export default Home;


