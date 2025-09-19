import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Users, Zap } from "lucide-react"

const skills = [
  {
    icon: Brain,
    title: "Thinking Big Picture",
    description: "How are scalability, deployment, and UI? Software is more than just code. ",
  },
  {
    icon: Lightbulb,
    title: "Problem-driven",
    description: "I'm not a fan of copy-and-paste projects. What's new? What do people need? What's an issue?",
  },
  {
    icon: Users,
    title: "Others-focused",
    description: "How can I be customer-obsessed, empathetic, and a good teacher and student? Matthew 22:36-40"
  },
  {
    icon: Zap,
    title: "Quick to Learn",
    description: "Passionate about staying current with emerging technologies and best practices. Willing to listen and ask questions when it's uncomfortable.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I love to learn, create, solve, and serve, and I aim to glorify God in all I do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <img
            src="/briefing.jpg"
            alt="Will in a suit giving a briefing."
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div>
<p className="text-lg text-foreground leading-relaxed">
  Since I was a kid, I've had a strong passion for technology and entrepreneurship. When I was 10, I got a Surface Pro 2 laptop for Christmas. I wanted to learn everything about it -- just like I had with my iPad -- and started playing Minecraft. Diving head-first, I researched port-forwarding, networking, and programming as I wanted to play on my own modded server with my friends.
</p>
<br />
<p className="text-lg text-foreground leading-relaxed">
  Now, I'm graduating from Liberty University in May of 2026 with a B.S. in computer science. I'm specializing in software engineering and data science, and I have a business minor. Additionally, I've had four tech internships, one of which was before starting college. I'm excited to utilize my skills post-grad, whether I look into master's programs, build a startup, or work full-time for another company. 
</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground leading-relaxed">
              Outside my studies, I've worked on diverse projects ranging from full-stack web applications, a chrome extension, applied AI research, and biomedical computer vision research.
              I love automation, collaboration, and a strong user focus. I also love to laugh, have fun, care for others, and shine the light of Christ. 
            </p>
            <br />
            <p className="text-lg text-foreground leading-relaxed">
              Efficient technical problem solving and collaboration are where I thrive, and I'm always looking for ways to grow my skills, both hard and soft.
              I'm excited to bring my enthusiasm and fresh perspective to a dynamic team.
            </p>
          </div>
          <img
            src="/programming.png"
            alt="Will looking intently at a computer."
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
