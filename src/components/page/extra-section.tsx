import { Star, Code, Gamepad2 } from 'lucide-react';

const activities = [
    {
        title: "Open-Source Contributor",
        description: "40+ GitHub commits",
        icon: <Code className="h-6 w-6 text-primary" />
    },
    {
        title: "Participant, Adobe Hackathon",
        description: "",
        icon: <Star className="h-6 w-6 text-primary" />
    },
    {
        title: "Participant, Flipkart Grid Hackathon",
        description: "",
        icon: <Star className="h-6 w-6 text-primary" />
    },
]

export function ExtraSection() {
  return (
    <section id="extra" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Extracurricular Activities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Additional information and activities.
            </p>
          </div>
        </div>
         <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {activities.map((activity, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2 text-center p-4 rounded-lg transition-all hover:bg-muted">
                    {activity.icon}
                    <h3 className="text-lg font-bold">{activity.title}</h3>
                    {activity.description && <p className="text-sm text-muted-foreground">{activity.description}</p>}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
