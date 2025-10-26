
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative bg-transparent">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-xl space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-mono">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
