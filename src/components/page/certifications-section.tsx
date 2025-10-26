import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const certifications = [
  "Python Data Science Fundamentals (Udemy)",
  "Python Data Science: Variables and DataTypes (Udemy)",
  "3-Day Workshop on Cloud Computing",
  "Master Python by Building 100 Projects in 100 Days (Udemy)"
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of my professional certifications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col justify-center">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="font-mono text-lg">{cert}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}