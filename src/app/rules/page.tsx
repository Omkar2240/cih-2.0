import { TerrainFooter } from "@/components/sections/TerrainFooter";
import { Navbar } from "@/components/ui/Navbar";

export const metadata = {
  title: "Rules | Campus Innovate Hackathon 2.0",
};

export default function RulesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      
      {/* Background Starry Noise */}
      <div className="fixed inset-0 z-0 bg-stars opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl z-10 relative mt-32 mb-32">
        <a href="/" className="text-neon-cyan hover:underline font-bold text-sm mb-8 inline-block tracking-widest uppercase">
          &larr; Back to Home
        </a>
        
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Official Event Rules</h1>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-12">Read carefully before participating</p>

        <div className="space-y-12 font-body text-white/80 leading-relaxed">
          
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">1. Code Development</h2>
            <p className="mb-4">
              All code, design, and assets must be developed <strong>entirely during the 6-hour hackathon</strong>. You may not begin coding or utilize pre-written proprietary code before the event starts.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Use of open-source frameworks, public libraries, and standard boilerplate templates (like create-react-app or next.js starters) is permitted and highly encouraged.</li>
              <li>You may bring pre-designed wireframes or mockups, but the actual implementation must occur during the hackathon window.</li>
              <li>Plagiarism or submitting past projects will result in immediate disqualification.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">2. Submission Requirements</h2>
            <p className="mb-4">
              Teams are required to submit their final functioning project via a public GitHub repository along with a detailed presentation.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong>GitHub Repository:</strong> Must be public, contain all source code, and include a descriptive `README.md` explaining the project, tech stack, and how to run it locally.</li>
              <li><strong>Presentation:</strong> A short pitch deck (Slide/PPT) or video demo highlighting the problem being solved, the proposed solution, and the business/impact potential.</li>
              <li>Late submissions will not be evaluated unless previously authorized by the organizers due to technical difficulties.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">3. Judging Criteria</h2>
            <p className="mb-4">
              Projects will be evaluated by an expert panel of judges based on the following equally-weighted criteria:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong>Innovation (25%):</strong> How creative, unique, and fresh is the solution? Does it tackle the problem from a new angle?</li>
              <li><strong>Impact & Feasibility (25%):</strong> How useful is the project in the real world? Can it scale or be adopted reasonably easily?</li>
              <li><strong>Technical Execution (25%):</strong> Is the code robust? Does the core feature work as intended? Is the UI/UX intuitive and well-designed?</li>
              <li><strong>Presentation Quality (25%):</strong> How well did the team explain the problem, their solution, and demonstrate the prototype during the final pitch?</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="font-display text-2xl font-bold text-neon-amber mb-4">4. Team & Conduct Regulations</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Teams must consist of 2 to 4 members. You cannot switch teams or add new members once the hacking period has officially begun.</li>
              <li>All participants must maintain a respectful and professional demeanor. Sabotaging other teams, disruptive behavior, or harassment will lead to immediate expulsion from the venue.</li>
              <li>Hardware requirements: Bring your own laptops and chargers. Wi-Fi will be provided, but keeping a personal hotspot backup is recommended.</li>
            </ul>
          </section>

          <div className="text-center text-sm text-white/50 pt-8">
            <p>If you have any questions or require clarifications regarding these rules, please reach out to the organizing team through our official WhatsApp group.</p>
          </div>

        </div>
      </div>

      <TerrainFooter />
    </main>
  );
}
