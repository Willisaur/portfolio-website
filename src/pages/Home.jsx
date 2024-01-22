import './Home.css';

function Home() {
  return (
    <div className='home'>
      <header>
        <h1>Hi there! 👋 I'm Will.</h1>
        <img className="photo-selfie" src="./images/pfp.jpg" alt="Selfie with mountain background"></img>
        <h2>Nice to meet you!</h2>
        Thanks for visiting my profile ❤️ I hope I can help you!
      </header>

      <section className='skills'>
        <h2>Here's a bit about me.</h2>
        <h3>Skills</h3>
        <ul>
          <li>🔭 Practicing: React, Data structures & algorithms, competitive programming</li>
          <li>🌱 Learning: Swift, C#, Assembly, SQL, computer architecture, databases</li>
          <li>🤔 Experienced: Python, C++, Java, HTML/CSS/JS/PHP</li>
        </ul>
      </section>

      <section className='goals'>
        <h3>My Goals</h3>
        <p>
          I aim to glorify God in all I do. I love to learn, create, and serve. I am especially passionate about automation, software creation, and entrepreneurship.
        </p>
        <br />
        <p>
          I am an honors CS student at Liberty University with focuses in software engineering & data science. I am also vice president of the Competitive Programming Club, and I will graduate in 2026. 
        </p>
        <br />
        <p>
          I've had two summer internships so far. As I finish my sophomore year, I hope to intern in Washington, D.C. through a fellowship with my university. After I graduate, I hope to work in big-tech/fin-tech in the city for a few years.
        </p>
      </section>

      <section className="passions">
        <h3>How I Got Started</h3>
        <p>
          I've always loved technology -- for my reading log in elementary school, I read an iPhone user manual. When I was 10, I started coding; I learned basic networking and programming from Minecraft servers. In high school, I took five programming classes, and now, I am blessed to study CS full-time in college in VA (go flames!)!
        </p>
        <br />
        <p>
          I have realized my interest in business more recently; specifically, the freedom of entrepreneurship and organization of personal finance appeals to me. I started listening to Dave Ramsey on YouTube when I was 12 after taking a field trip to his studio. However, you legally cannot do that much at age 12, and I didn't have any good business ideas.
        </p> 
        <br />
        <p>
          In high school, during the pandemic, I neared adulthood. I started investing in stocks, researching personal finance, and studying online business owners. I feared the risk of starting my own business, so I haven't made one yet. Someday, I would like to have my own side business for apps I want to develop and a clothing brand I would like to create.
        </p>
      </section>
    </div>
  );
}

export default Home;


