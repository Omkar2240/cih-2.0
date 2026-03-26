import { TerrainFooter } from "@/components/sections/TerrainFooter";

export const metadata = {
  title: "Legal & Privacy | Campus Innovate Hackathon 2.0",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white selection:bg-neon-cyan selection:text-black pt-32">
      {/* Background Starry Noise */}
      <div className="fixed inset-0 z-0 bg-stars opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl z-10 relative mb-32">
        <a href="/" className="text-neon-cyan hover:underline font-bold text-sm mb-8 inline-block tracking-widest uppercase">
          &larr; Back to Home
        </a>
        
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Legal & Privacy</h1>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-12">Last Updated: March 2026</p>

        <div className="space-y-12 font-body text-white/80 leading-relaxed">
          
          <section>
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">1. General Terms and Conditions</h2>
            <p className="mb-4">
              By registering for and participating in Campus Innovate Hackathon 2.0, you agree to abide by all rules, policies, and terms set forth by the organizing team and G H Raisoni College of Engineering and Management. The organizers reserve the right to modify these terms, the event schedule, the prize structure, or any other aspect of the hackathon at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">2. Code of Conduct</h2>
            <p className="mb-4">
              We are committed to providing a safe, inclusive, and harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. Harassment of event participants in any form will not be tolerated. Participants violating these rules may be sanctioned or expelled from the event at the discretion of the event organizers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              All code, designs, and materials created by participants during the hackathon remain the intellectual property of the respective teams. However, by participating, you grant the organizers and sponsors a non-exclusive, worldwide, royalty-free license to use, display, and promote your project for marketing and promotional purposes related to the hackathon.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">4. Liability & Data Privacy</h2>
            <p className="mb-4">
              The organizers and the host institution are not liable for any personal injury, loss, or damage to property that may occur during the event. By submitting your personal information during registration, you consent to the collection, processing, and use of your data for event administration, communication, and promotional purposes in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">5. Dispute Resolution</h2>
            <p className="mb-4">
              Any dispute regarding the hackathon rules, conduct, or results will be resolved by the organizing committee. The decision of the judges and organizing committee is final and binding. The organizers reserve the right to disqualify any team found violating the rules or engaging in unethical practices.
            </p>
          </section>

          <div className="h-px w-full bg-white/10 my-16" />

          <section className="text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Campus Innovate Hackathon 2.0. All Rights Reserved.</p>
            <p className="mt-2">G H Raisoni College of Engineering and Management, Nagpur.</p>
          </section>

        </div>
      </div>

      <TerrainFooter />
    </main>
  );
}
