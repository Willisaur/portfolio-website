import './Projects.css';

/*
Here, I attempted to generate the HTML with lists of projects and blurbs.
// https://react.dev/learn/rendering-lists
// https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
-------------------------

const projects = [
  {
    title: "Portfolio Website",
    link: "https://willisaur.github.io",
    blurbs: [
      "Written in React",
      "Utilizes Git and GitHub Desktop",
      "Is what you're reading <em>right</em> now!"
    ],
    preview: <img src='./images/Website Screenshot.png' width="50%" />
  }, 
  {
    title: "LeetCode to GitHub Chrome Extension",
    link: "https://bit.ly/L2G-CWS",
    blurbs: [
      "Published (with version control & test automation) a 1,000-line extension that automates uploading submissions",
      "Intercepted HTTP requests with asynchronous API calls in JS to validate website statuses and capture source code",
      "Applied agile software development methodologies with Jira, Kanban, and CI/CD"
    ],
    preview: <iframe src="https://bit.ly/L2G-CWS" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>
  }, 
  {
    title: "Senior Thesis",
    link: "https://willisaur.github.io",
    blurbs: [
      "Wrote a 38-page thesis for a proof-of-concept health-tracking app & used quantitative research and development",
      "Conducted a study with 109 subjects to investigate users’ needs and improve the UI/UX in mobile development",
      "Researched machine learning and data forecasting models to predict users’ health using advanced analytics",
      "Collaborated with teachers, industry mentors, academic advisors, and students to revise and brainstorm ideas"
    ],
    preview: <iframe src="./Senior Thesis Snippet.pdf" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>
  },
  {
    title: "GIS Story Map with Crash Data Analytics",
    link: "https://arcg.is/9PrGG",
    blurbs: [
      "Placed 2nd in state for best GIS storytelling map, including analytics and ML training on 221,300 rows of data",
      "Visualized data distributions, data models, data analysis, & data processing with Seaborn and Matplotlib graphs"
    ],
    preview: <iframe src="https://storymaps.arcgis.com/stories/b6fd454a05e440fa94d532784c0e618f?header?cover=false" width="100%" height="500px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
  } 
];

{
  projects.map(( project, i ) =>
    <div key={i} className={`main-projects-item main-projects-item-${i}`}>
      <h1><a href="https://willisaur.github.io">Portfolio Website</a></h1>
      <ul>
        {
          project.blurbs.map(( blurb, j ) => 
            <li key={i + '.' + j}>{blurb}</li>
          )
        }
      </ul>
    </div>
  )
}
*/


function Projects() {
  return (
    <div className="projects">
      <h1>Main Projects</h1><br />
      <div className='main-projects'>
        <div className="main-projects-item">
          <h2><a href="https://willstarling.com/#/">Portfolio Website</a></h2>
          <p>
            A site to showcase my projects and skills. I learned React, Git, and more advanced CSS to make this. You're on the site right now.
          </p>
          <img className='main-projects-item-media' src='./images/Website Screenshot.png' alt="Home page"></img>
        </div>
        
        <div className="main-projects-item">
          <h2><a href="https://bit.ly/L2G-CWS-v2">LeetCode to GitHub Chrome Extension</a></h2>
          <p>
            A Chrome extension that automates uploading LeetCode submissions to GitHub. I learned more about JavaScript, async/await, version control, agile software development, and API calls/web requests.
          </p>
          <img className='main-projects-item-media' src='./images/CWS Screenshot.png' alt="The Chrome Web Store page for my extension with a download button"></img>
        </div>
        
        <div className="main-projects-item">
          <h2><a href="./Senior Thesis Snippet.pdf">Senior Thesis</a></h2>
          <p>
            A 38-page thesis for a proof-of-concept health-tracking app. I learned about quantitative research and development, UI/UX, machine learning, and advanced analytics. I performed a study with 109 subjects and collaborated with industry mentors to revise and brainstorm ideas.
          </p>
          <img className='main-projects-item-media' src='./images/Thesis.png' alt="The title page of my thesis"></img>
        </div>

        <div className="main-projects-item">
          <h2><a href="https://arcg.is/9PrGG">GIS Story Map with Crash Data Analytics</a></h2>
          <p>
            A story map that visualizes traffic accidents in Nashville, TN. I learned about data analytics, data visualization, and data processing using libraries like MatplotLib, Seaborn, and SciKit-Learn. I placed 2nd in state for best GIS storytelling map.
          </p>
          <iframe className='main-projects-item-media' src="https://storymaps.arcgis.com/stories/b6fd454a05e440fa94d532784c0e618f?header?cover=false" title="Metro Nashville Traffic Accidents story map" frameborder="0" allowfullscreen allow="geolocation"></iframe>
        </div>
      </div>

      <div className='other-projects'>
        <h1>Other Projects</h1>
        {/* <div className="other-projects-item"></div> */}
        <p>
          Coming soon... 
        </p>
        <br />
        <p>
          In the meantime, check out my <a href="https://www.linkedin.com/in/willstarling/">LinkedIn</a> or <a href="https://github.com/Willisaur">GitHub!</a>
        </p>
      </div>
      <div className='socials-container'>
        {/* <img src="./images/GitHub Logo.png" alt="GitHub Logo" />
        <img src="./images/LinkedIn Logo.png" alt="LinkedIn Logo" /> */}
        
        <a className='socials' href="https://www.linkedin.com/in/willstarling/"><img src="./images/LinkedIn Profile.png" alt="LinkedIn Logo" /></a>
        <a className='socials' href="https://github.com/Willisaur"><img src="./images/GitHub Profile 2.png" alt="GitHub Logo" /></a>
      </div>
    </div>
  );
}

export default Projects;


