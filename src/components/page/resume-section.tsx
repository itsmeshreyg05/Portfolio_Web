import { Briefcase, GraduationCap, Wrench } from 'lucide-react';

const experiences = [
  {
    company: 'Headstarter AI',
    role: 'Fellowship Intern',
    period: 'Jul 2024 – Sep 2024',
    tasks: [
      'Built 5 React/Node.js modules, cutting load times by 35% for 10k+ users.',
      'Automated 2k+ tasks/month via AI features, saving 50 staff-hours.',
    ],
  },
  {
    company: 'Netsmartz',
    role: 'Summer Intern',
    period: 'Jun 2025 – Jul 2025',
    tasks: [
      'Deployed 8 FastAPI endpoints, reducing latency 30% to 350ms at 200 req/min.',
      'Refactored backend, cutting bugs 40% and speeding releases 25%.',
    ],
  },
];

const education = [
  {
    institution: 'Thapar Institute of Engineering and Technology, Patiala, Punjab',
    degree: 'B.Tech (Computer Science)',
    period: '2025 – Present',
    grade: '8.35 CGPA',
  },
  {
    institution: 'Sri Guru Gobind Singh Collegiate Public School, Chandigarh',
    degree: 'Higher Secondary (CBSE)',
    period: '2021 – 2023',
    grade: '89.4%',
  },
  {
    institution: 'Satluj Public School, Panchkula, Haryana',
    degree: 'Matriculation (CBSE)',
    period: 'Till 2021',
    grade: '87.5%',
  },
];

const skills: Record<string, string> = {
  Languages: 'Python, C, C++, HTML, CSS, JavaScript, MATLAB, R, SQL, PL/SQL',
  Concepts:
    'Data Structures, Algorithms, DBMS, OS, AI, Deep Learning, GenAI, RAG, Cognitive Computing',
  'Backend & APIs': 'Flask, Django, FastAPI, Node.js, React, REST APIs',
  'Tools & Libraries':
    'Git, Docker, VS Code, PyCharm, Tkinter, Pandas, NumPy, Matplotlib, Scikit-learn, XGBoost, BeautifulSoup, Requests, LangChain',
  Other: 'Excel, Microsoft Office, AutoCAD',
};

export function ResumeSection() {
  return (
    <section id="resume" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Resume</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here is a summary of my professional experience and skills.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-mono mb-6 flex items-center gap-3">
              <Briefcase />Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg text-primary">
                      {exp.role} @ {exp.company}
                    </h4>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-mono mb-6 flex items-center gap-3">
              <GraduationCap />Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm">Grade: {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-mono mb-6 flex items-center gap-3">
              <Wrench />Technical Skills
            </h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="grid gap-1">
                  <h4 className="font-bold">{category}:</h4>
                  <p className="text-muted-foreground">{list}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}