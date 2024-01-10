import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>See what I'm capable of.</p>
      <br />
      
      <h2>Main Projects</h2>
      <div className='main-projects'>
        <div className="main-projects-box main-projects-box-1">
          <h4><a href="https://willisaur.github.io">Portfolio Website</a></h4>
          <ul>
            <li>Written in React</li>
            <li>Utilizes Git and GitHub Desktop</li>
            <li>Is what you're reading <em>right</em> now!</li>
          </ul>
          <img src='./images/Website Screenshot.png' width="50%"></img>
        </div>
        
        <div className="main-projects-box main-projects-box-2">
          <h4><a href="https://bit.ly/L2G-CWS">LeetCode to GitHub Chrome Extension</a></h4>
          <ul>
            <li>Published (with version control & test automation) a 1,000-line extension that automates uploading submissions</li>
            <li>Intercepted HTTP requests with asynchronous API calls in JS to validate website statuses and capture source code</li>
            <li>Applied agile software development methodologies with Jira, Kanban, and CI/CD</li>
          </ul>
        </div>
        
        <div className="main-projects-box main-projects-box-3">
          <h4>Senior Thesis</h4>
          <ul>
            <li>Wrote a 38-page thesis for a proof-of-concept health-tracking app & used quantitative research and development</li>
            <li>Conducted a study with 109 subjects to investigate users’ needs and improve the UI/UX in mobile development</li>
            <li>Researched machine learning and data forecasting models to predict users’ health using advanced analytics</li>
            <li>Collaborated with teachers, industry mentors, academic advisors, and students to revise and brainstorm ideas</li>
          </ul>
          <iframe src="./Senior Thesis Snippet.pdf" width="100%" height="500px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
        </div>

        <div className="main-projects-box main-projects-box-4">
          <h4><a href="https://arcg.is/9PrGG">GIS Story Map with Crash Data Analytics</a></h4>
            <ul>
              <li>Placed 2nd in state for best GIS storytelling map, including analytics and ML training on 221,300 rows of data</li>
              <li>Visualized data distributions, data models, data analysis, & data processing with Seaborn and Matplotlib graphs</li>
            </ul>
          <iframe src="https://storymaps.arcgis.com/stories/b6fd454a05e440fa94d532784c0e618f?header?cover=false" width="100%" height="500px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
        </div>
      </div>

      <h2>Other Projects</h2>
      <p>To be added...</p>
      <div className="other-projects">  
        <div className="other-projects-box other-projects-box-1">

        </div>
        
        <div className="other-projects-box other-projects-box-2">

        </div>
        
        <div className="other-projects-box other-projects-box-3">

        </div>
        
        <div className="other-projects-box other-projects-box-4">

        </div>
        
        <div className="other-projects-box other-projects-box-5">

        </div>
      </div>
    </div>
  );
}

export default Projects;


