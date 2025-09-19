import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "May 2025 - August 2025",
    description:
      "Created, deployed, and tested API migration in C# for the Data Loss Prevention (DLP) team. Designed metrics, alerts, and logs for real-time monitoring. ",
    technologies: ["C#", "APIs", "Telemetry", "Databases"],
    achievements: [
      "Upgraded a legacy API called 7+ million times per day to reduce overhead & improve scalability on a large-scale distributed system",
      "Added 3 feature flags and 6 unit tests to reliably deploy features in new regions",
      "Contributed consistently with weekly PRs and code reviews, biweekly demos and presentations, and daily sprint board updates",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "May 2024 - August 2024",
    description:
      "Added a skill to Security Copilot, enabling users to onboard with AI. Developed using Semantic Kernel in C#.",
    technologies: ["C#", "LLMs", "APIs", "Azure"],
    achievements: [
      "Utilized LLM prompt engineering, CI/CD pipelines, API calls, and endpoint exposures to reduce client onboarding time by 50%",
      "Collaborated cross-functionally with engineers, product managers, and lawyers for feedback, planning, and guidance",
    ],
  },
  {
    title: "IT & Data Analytics Intern",
    company: "Sodexo Live!",
    location: "Nashville, TN",
    period: "June 2023 - August 2023",
    description:
      "Repaired PoS devices as needed. Offered sales and restocking analytics with Python.",
    technologies: ["Python", "Seaborn", "Matplotlib", "Networks"],
    achievements: [
      "Saved $10,000+ by testing/troubleshooting POS, IoT, and enterprise networking equipment/hardware",
      "Monitored and debugged 220 POS handhelds for NASCAR and at the Nashville Sounds Baseball Park",
      "Cleaned and plotted sales data with Pandas and Matplotlib to maximize ROI and aid executive business decisions",
    ],
  },
  {
    title: "Computer Programming Intern",
    company: "True North Geographic Technologies",
    location: "Murfreesboro, TN",
    period: "June 2022 - August 2022",
    description:
      "Programmed custom plugins in Python for ArcGIS Pro, a data-mapping software. Automated data collection on proprietary servers and programs.",
    technologies: ["Python", "APIs", "Databases"],
    achievements: [
      "Saved $10,000+ by testing/troubleshooting POS, IoT, and enterprise networking equipment/hardware",
      "Monitored and debugged 220 POS handhelds for NASCAR and at the Nashville Sounds Baseball Park",
      "Cleaned and plotted sales data with Pandas and Matplotlib to maximize ROI and aid executive business decisions",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            My journey in software development through internships and projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
