import { Header } from '@/components/page/header';
import { ProfileSection } from '@/components/page/profile-section';
import { ProjectsSection } from '@/components/page/projects-section';
import { ResumeSection } from '@/components/page/resume-section';
import { CertificationsSection } from '@/components/page/certifications-section';
import { ContactSection } from '@/components/page/contact-section';
import { ExtraSection } from '@/components/page/extra-section';
import { Footer } from '@/components/page/footer';
import { InteractiveBackground } from '@/components/page/interactive-background';
import { SectionDivider } from '@/components/page/section-divider';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <InteractiveBackground />
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <SectionDivider />
        <ResumeSection />
  <ProjectsSection />
  <CertificationsSection />
        <ExtraSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}