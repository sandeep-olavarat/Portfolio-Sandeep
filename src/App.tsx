import { motion } from "motion/react";
import { 
  TrendingUp, 
  Layers, 
  MessageSquare, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Mail, 
  ArrowRight,
  Github,
  Linkedin,
  ExternalLink,
  Briefcase,
  History
} from "lucide-react";

const Navbar = () => (
  <header className="sticky top-0 w-full z-50 glass-header border-b border-outline-variant/10">
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-black tracking-tighter text-primary uppercase">Sandeep S.</div>
      <div className="hidden md:flex items-center gap-10">
        {["Experience", "Technical Skills", "Contact"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="font-medium tracking-widest uppercase text-[10px] text-secondary hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="bg-primary text-white px-5 py-2 rounded-lg font-semibold text-xs hover:bg-primary-container transition-all active:scale-95">
        Download CV
      </button>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center px-6 md:px-8 py-20 overflow-hidden bg-primary">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-on-tertiary-container/30 to-transparent blur-3xl" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-8 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-tertiary-container/10 border border-on-tertiary-container/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
          <span className="text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest">Senior Business Analyst</span>
        </div>
        
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-balance">
          Bridging the Gap Between <span className="text-on-tertiary-container">Business Vision</span> and Technical Execution
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          With over 3.5 years of specialized experience in Banking, EdTech, and Digital Transformation, I architect technical solutions that translate complex requirements into scalable business outcomes.
        </p>
        
        <div className="pt-4">
          <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_25px_rgba(52,134,255,0.4)] transition-all flex items-center gap-2 group">
            View Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>

    {/* Decorative Data Graphic */}
    <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:flex items-end gap-2 px-12 pb-0 opacity-30 pointer-events-none">
      {[40, 65, 50, 90, 75].map((height, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 1, delay: 0.2 * i }}
          className="w-full bg-on-tertiary-container/60 rounded-t-lg"
        />
      ))}
    </div>
  </section>
);

const Metrics = () => (
  <section className="py-24 px-6 md:px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: TrendingUp, num: "30-40%", label: "Efficiency Increase", desc: "Systematic workflow optimization and automation of manual documentation processes across multi-departmental projects.", id: "01" },
          { icon: Layers, num: "17+", label: "Projects Managed", desc: "End-to-end coordination of complex technical lifecycles from initial discovery to final stakeholder sign-off.", id: "02" },
          { icon: MessageSquare, num: "70%", label: "Query Resolution", desc: "Achieved via AI Chatbot implementation, drastically reducing manual support tickets and improving user satisfaction scores.", id: "03" }
        ].map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border-b-4 border-on-tertiary-container group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 rounded-xl bg-surface-container text-on-tertiary-container group-hover:bg-on-tertiary-container group-hover:text-white transition-colors">
                <m.icon className="w-8 h-8" />
              </div>
              <span className="text-slate-200 font-black text-5xl">{m.id}</span>
            </div>
            <h3 className="text-4xl font-black text-primary mb-2">{m.num}</h3>
            <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4">{m.label}</p>
            <p className="text-secondary/80 text-sm leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="technical-skills" className="py-32 px-6 md:px-8">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-8">
        <h2 className="text-4xl font-black text-primary leading-tight">Mastering the Core of Business Analysis.</h2>
        <p className="text-secondary text-lg">My methodology focuses on rigorous requirements gathering paired with modern technical tooling.</p>
        
        <div className="space-y-6">
          {[
            { title: "Requirements Gathering", desc: "Expert in BRD, FRS, and User Story creation." },
            { title: "Agile Methodology", desc: "Scrum framework specialist with deep Sprint management expertise." },
            { title: "SDLC Oversight", desc: "Managing the full product lifecycle from ideation to deployment." }
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-on-tertiary-container shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary">{s.title}</h4>
                <p className="text-secondary/70 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-3xl space-y-12">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 mb-8">Modern Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {["JIRA", "Power BI", "SQL", "Google AI Studio", "Claude", "Tableau", "Confluence", "UML Diagramming"].map((tag) => (
              <span key={tag} className="px-6 py-3 bg-white border border-outline-variant/20 rounded-full text-primary font-bold text-sm shadow-sm hover:border-on-tertiary-container transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { label: "Analytical Strategy", val: "95%" },
            { label: "Stakeholder Management", val: "90%" }
          ].map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10 space-y-4">
              <div className="flex items-center gap-3">
                {i === 0 ? <TrendingUp className="w-5 h-5 text-on-tertiary-container" /> : <Layers className="w-5 h-5 text-on-tertiary-container" />}
                <h4 className="font-bold text-primary text-sm">{p.label}</h4>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: p.val }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-on-tertiary-container" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section id="experience" className="py-32 px-6 md:px-8 bg-primary">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-on-tertiary-container font-bold text-[10px] uppercase tracking-[0.2em]">Career Journey</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Timeline of Technical Excellence</h2>
        </div>
        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest hidden md:block">
          3.5+ Years of Proven Impact
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-on-tertiary-container/20 transform -translate-x-1/2" />
        
        <div className="space-y-20">
          {/* Entry 1 */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:text-right space-y-4"
            >
              <div className="inline-block px-4 py-1 bg-on-tertiary-container text-white text-[10px] font-bold rounded-full">Current Engagement</div>
              <h3 className="text-3xl font-bold text-white">Health Careers International</h3>
              <p className="text-on-tertiary-container font-bold text-sm">Senior Business Analyst</p>
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-slate-300 text-sm leading-relaxed">
                Lead Analyst for <span className="text-white font-bold">Clinsoft Healthcare Platform</span> serving 10k+ active users. Orchestrated digital transformation initiatives and integrated AI-driven diagnostic assistance tools.
              </div>
            </motion.div>
            <div className="hidden md:flex justify-start">
              <div className="w-12 h-12 rounded-full bg-primary border-4 border-on-tertiary-container z-10 flex items-center justify-center transform -translate-x-[calc(50%+24px)]">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:flex justify-end order-1">
              <div className="w-12 h-12 rounded-full bg-primary border-4 border-on-tertiary-container z-10 flex items-center justify-center transform translate-x-[calc(50%+24px)]">
                <History className="w-5 h-5 text-white" />
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:pl-12 order-2 space-y-4"
            >
              <div className="inline-block px-4 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full">Past Milestone</div>
              <h3 className="text-3xl font-bold text-white">Profinch Solutions</h3>
              <p className="text-on-tertiary-container font-bold text-sm">Technical Project Coordinator</p>
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-slate-300 text-sm leading-relaxed">
                Spearheaded the <span className="text-white font-bold">Oracle Flexcube Upgrade</span>. Managed cross-border teams to ensure seamless core banking transition with zero operational downtime for tier-1 financial institutions.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Recognition = () => (
  <section className="py-32 px-6 md:px-8">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <h2 className="text-3xl font-black text-primary flex items-center gap-4">
          <Award className="w-10 h-10 text-on-tertiary-container" />
          Recognition
        </h2>
        <div className="bg-surface-container-low p-10 rounded-3xl relative overflow-hidden group">
          <Award className="absolute -right-8 -bottom-8 w-48 h-48 text-primary/5 group-hover:scale-110 transition-transform" />
          <div className="flex items-start gap-8 relative z-10">
            <div className="w-20 h-20 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-on-tertiary-container/20">
              <Award className="w-10 h-10 text-on-tertiary-container fill-on-tertiary-container/10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Certificate of Appreciation</h3>
              <p className="text-on-tertiary-container font-black text-xs uppercase tracking-widest">Deployment Excellence</p>
              <p className="text-secondary/80 text-sm leading-relaxed">Awarded for the exceptional deployment of the Clinsoft Healthcare platform, ensuring on-time delivery and high stakeholder satisfaction across international markets.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h2 className="text-3xl font-black text-primary flex items-center gap-4">
          <GraduationCap className="w-10 h-10 text-on-tertiary-container" />
          Education
        </h2>
        <div className="space-y-6">
          {[
            { title: "MBA in HR Finance", desc: "Specialized in Strategic Management & Financial Analysis", color: "border-on-tertiary-container" },
            { title: "Data Science Diploma", desc: "Focus on Predictive Modeling and Data Visualization", color: "border-primary" }
          ].map((edu, i) => (
            <div key={i} className={`p-8 border-l-4 ${edu.color} bg-surface-container-low rounded-r-3xl space-y-2`}>
              <h4 className="text-xl font-bold text-primary">{edu.title}</h4>
              <p className="text-secondary/70 text-sm">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="px-6 md:px-8 mb-20">
    <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 space-y-10"
      >
        <h2 className="text-white text-4xl md:text-7xl font-black leading-tight">
          Ready to Optimize Your <br />
          <span className="text-on-tertiary-container">Business Logic?</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Currently open to senior analytical roles and strategic project coordination opportunities worldwide.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:contact@sandeeps.me"
            className="bg-on-tertiary-container text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-lg shadow-on-tertiary-container/20"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </a>
          <button className="px-10 py-5 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-all">
            Explore Projects
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface py-16 px-6 md:px-8 border-t border-outline-variant/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <span className="font-black text-primary uppercase tracking-tighter text-xl">Sandeep S.</span>
        <span className="hidden md:block text-outline-variant">|</span>
        <span className="text-secondary/60 text-sm font-medium">© 2024 Sandeep S. Portfolio | Analytical Architect</span>
      </div>
      
      <div className="flex items-center gap-8">
        {[
          { label: "LinkedIn", icon: Linkedin },
          { label: "GitHub", icon: Github },
          { label: "Tableau Public", icon: ExternalLink }
        ].map((link) => (
          <a 
            key={link.label}
            href="#" 
            className="text-secondary/60 hover:text-on-tertiary-container transition-colors text-sm font-bold flex items-center gap-2"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-on-tertiary-container selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Skills />
        <Timeline />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
