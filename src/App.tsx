import { motion } from 'motion/react';
import { 
  Download, 
  Linkedin, 
  Github, 
  Award, 
  Stethoscope, 
  BarChart3, 
  Building2, 
  School, 
  Medal, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  CheckCircle2,
  Settings2,
  ShieldCheck,
  Bolt,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import { 
  EXPERIENCES, 
  EDUCATION, 
  CERTIFICATIONS, 
  RECOGNITIONS, 
  TECHNICAL_ECOSYSTEM, 
  PROFILE_IMAGE 
} from './constants';

const Nav = () => (
  <header className="sticky top-0 w-full z-50 glass-header shadow-[0_40px_40px_-15px_rgba(0,0,0,0.06)]">
    <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-black tracking-tighter text-primary uppercase">Sandeep S</div>
      <div className="hidden md:flex items-center gap-10">
        <a href="#experience" className="font-medium tracking-[0.05em] uppercase text-xs text-secondary hover:text-primary transition-colors">Experience</a>
        <a href="#skills" className="font-medium tracking-[0.05em] uppercase text-xs text-secondary hover:text-primary transition-colors">Technical Skills</a>
        <a href="#contact" className="font-medium tracking-[0.05em] uppercase text-xs text-secondary hover:text-primary transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="https://drive.google.com/file/d/1wpADJ9ej6N5cy2HjReCSnzCAcMFQj1oJ/view?usp=sharing" 
          target="_blank" 
          className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-medium text-sm hover:bg-primary transition-all active:scale-95 duration-300"
        >
          Download CV
        </a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[870px] flex items-center px-8 py-24 bg-primary overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-on-tertiary-container/30 to-transparent blur-3xl"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-tertiary-container/10 border border-on-tertiary-container/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          <span className="text-on-tertiary-container font-bold text-[10px] uppercase tracking-[0.1em]">
            Business Analyst | Project Coordinator
          </span>
        </div>
        
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl text-balance">
          Bridging the Gap Between <span className="text-on-tertiary-container">Business Vision</span> and Technical Execution
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Business Analyst with over 3.5 years of experience across Education, Banking, and Digital Transformation.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Phone className="text-on-tertiary-container w-4 h-4" />
            +91-8157920942
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-on-tertiary-container w-4 h-4" />
            sandeep.olavarat@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-on-tertiary-container w-4 h-4" />
            Bengaluru, Karnataka, India
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://drive.google.com/file/d/1wpADJ9ej6N5cy2HjReCSnzCAcMFQj1oJ/view?usp=sharing" 
            target="_blank"
            className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-base hover:bg-on-tertiary-container hover:text-white transition-all flex items-center gap-2 shadow-lg group"
          >
            Download CV
            <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/sandeep-olavarat/" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-on-tertiary-container transition-all text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sandeep-olavarat" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-on-tertiary-container transition-all text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.credential.net/profile/sandeep-s/wallet" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-on-tertiary-container transition-all text-white">
              <Award className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex lg:col-span-5 justify-center items-center relative"
      >
        <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl z-20">
          <img 
            alt="Sandeep S. Profile" 
            className="w-full h-full object-cover" 
            src={PROFILE_IMAGE} 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-on-tertiary-container/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl z-10"></div>
      </motion.div>
    </div>
    
    {/* Hero Decorative Data Graphic */}
    <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-40">
      <div className="h-full w-full flex items-end gap-1 px-12">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full bg-on-tertiary-container/40 rounded-t-lg"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '65%' }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full bg-on-tertiary-container/60 rounded-t-lg"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '50%' }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full bg-on-tertiary-container/30 rounded-t-lg"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '90%' }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full bg-on-tertiary-container/80 rounded-t-lg"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '75%' }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full bg-on-tertiary-container/50 rounded-t-lg"
        />
      </div>
    </div>
  </section>
);

const Metrics = () => (
  <section className="py-24 px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <BarChart3 className="w-8 h-8" />, label: 'Dashboards Built', value: '30+', color: 'on-tertiary-container', index: '01', desc: 'Developed comprehensive Power BI reporting suites for cross-departmental data visibility and strategic decision making.' },
          { icon: <LayoutGrid className="w-8 h-8" />, label: 'Projects Managed', value: '17+', color: 'primary', index: '02', desc: 'End-to-end coordination of complex technical lifecycles from initial discovery to final stakeholder sign-off.' },
          { icon: <Bolt className="w-8 h-8" />, label: 'Automation Success', value: '100%', color: 'on-tertiary-container', index: '03', desc: 'Implemented Monday.com and MS Power Platform solutions to eliminate manual bottlenecks and streamline workflows.' }
        ].map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-surface-container-lowest p-10 rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border-b-4 border-${metric.color} group`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-lg bg-surface-container text-${metric.color} group-hover:bg-${metric.color} group-hover:text-white transition-all`}>
                {metric.icon}
              </div>
              <span className="text-slate-300 font-black text-4xl">{metric.index}</span>
            </div>
            <h3 className="text-4xl font-black text-primary mb-2">{metric.value}</h3>
            <p className="text-secondary font-medium uppercase tracking-wider text-xs mb-4">{metric.label}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{metric.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="py-32 px-8" id="skills">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4">
        <h2 className="text-4xl font-black text-primary leading-tight mb-6">Mastering the Core of Business Analysis.</h2>
        <p className="text-secondary text-lg mb-8">Comprehensive expertise across documentation, agile frameworks, and digital orchestration tools.</p>
        <div className="space-y-6">
          {[
            { title: 'Requirements Engineering', desc: 'BRD, FRS, SLA/SOW drafting, and meticulous User Story creation.' },
            { title: 'Agile Ceremonies', desc: 'Expert in Scrum framework, Sprint management, and Backlog grooming.' },
            { title: 'Competitor & Gap Analysis', desc: 'Strategic market positioning and identifying technical solution gaps.' }
          ].map((skill, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="text-on-tertiary-container w-5 h-5 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-primary">{skill.title}</h4>
                <p className="text-on-surface-variant text-sm">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-8 bg-surface-container-low p-8 rounded-2xl">
        <div className="mb-10">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-6">Technical Ecosystem</h3>
          <div className="flex flex-wrap gap-2">
            {TECHNICAL_ECOSYSTEM.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-outline-variant/30 rounded-lg text-primary font-bold shadow-sm text-sm hover:border-on-tertiary-container transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-4">
              <Settings2 className="text-on-tertiary-container w-5 h-5" />
              <h4 className="font-bold text-primary">Key Project Expertise</h4>
            </div>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> Monday.com Implementation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> Studylink CRM Migration</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> MS Power Platform Solutions</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-on-tertiary-container w-5 h-5" />
              <h4 className="font-bold text-primary">Banking Domain</h4>
            </div>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> Oracle FLEXCUBE Core</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> SWIFT & RTGS Payments</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></span> Compliance & Reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-white" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-white" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-white" />;
      default: return <Settings2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-32 px-8 bg-primary" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-on-tertiary-container font-bold text-xs uppercase tracking-[0.2em] mb-4">Career Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Timeline of Professional Impact</h2>
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-wider hidden md:block">
            3.5+ Years of Technical Excellence
          </div>
        </div>
        
        <div className="relative space-y-24">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-on-tertiary-container/30 transform -translate-x-1/2"></div>
          
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative grid md:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-12'}`}>
                <div className={`inline-block px-4 py-1 ${exp.isCurrent ? 'bg-on-tertiary-container' : 'bg-white/10'} text-white text-xs font-bold rounded-full mb-4`}>
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <p className="text-on-tertiary-container font-medium mb-4">{exp.role}</p>
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-slate-300 text-sm leading-relaxed text-left">
                  {Array.isArray(exp.description) ? (
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="text-on-tertiary-container w-4 h-4 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
              
              <div className={`hidden md:flex ${i % 2 === 0 ? 'justify-start' : 'justify-end order-1'}`}>
                <div className={`w-12 h-12 rounded-full bg-primary border-4 border-on-tertiary-container z-10 flex items-center justify-center transform ${i % 2 === 0 ? '-translate-x-[calc(50%+24px)]' : 'translate-x-[calc(50%+24px)]'}`}>
                  {getIcon(exp.icon)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationAndCerts = () => (
  <section className="py-32 px-8">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
      {/* Education */}
      <div>
        <h2 className="text-2xl font-black text-primary mb-8 flex items-center gap-4">
          <School className="w-8 h-8 text-on-tertiary-container" />
          Education
        </h2>
        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <div key={edu.id} className={`p-6 border-l-4 ${i % 2 === 0 ? 'border-on-tertiary-container' : 'border-primary'} bg-surface-container-low rounded-r-xl`}>
              <h4 className="font-bold text-primary">{edu.degree}</h4>
              <p className="text-secondary text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-black text-primary mb-8 flex items-center gap-4">
          <Award className="w-8 h-8 text-on-tertiary-container" />
          Certifications
          <a href="https://www.credential.net/profile/sandeep-s/wallet" target="_blank" className="ml-auto text-xs font-bold text-on-tertiary-container hover:underline flex items-center gap-1">
            View All <ExternalLink className="w-3 h-3" />
          </a>
        </h2>
        <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.id} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full"></span>
              <p className="text-sm font-bold text-primary">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recognition */}
      <div>
        <h2 className="text-2xl font-black text-primary mb-8 flex items-center gap-4">
          <Medal className="w-8 h-8 text-on-tertiary-container" />
          Recognition
        </h2>
        <div className="space-y-4">
          {RECOGNITIONS.map(rec => (
            <div key={rec.id} className="bg-surface-container-low p-6 rounded-xl relative group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-on-tertiary-container">
                  {rec.icon === 'Award' ? <Award className="w-8 h-8 fill-current" /> : <Medal className="w-8 h-8 fill-current" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary">{rec.title}</h3>
                  <p className="text-on-tertiary-container font-bold text-[10px] uppercase mb-2">{rec.date}</p>
                  <p className="text-secondary text-xs leading-relaxed">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section className="px-8 mb-16" id="contact">
    <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-12 md:p-24 relative overflow-hidden text-center">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
          Ready to Optimize Your <br/><span className="text-on-tertiary-container">Business Logic?</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Currently open to senior analytical roles and strategic project coordination opportunities in Bengaluru and globally.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:sandeep.olavarat@gmail.com" 
            className="bg-on-tertiary-container text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </a>
          <a 
            href="https://www.linkedin.com/in/sandeep-olavarat/" 
            target="_blank"
            className="px-10 py-5 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 border-t border-outline-variant/10">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
      <div className="flex items-center gap-3">
        <span className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter text-lg">Sandeep S</span>
        <span className="text-slate-300 text-xl">|</span>
        <span className="text-sm tracking-tight text-slate-500">© 2026 | Business Analyst | Bengaluru, India</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="https://linkedin.com/in/sandeep-olavarat/" className="text-slate-400 hover:text-on-tertiary-container hover:underline underline-offset-4 transition-all text-sm font-medium">LinkedIn</a>
        <a href="https://github.com/sandeep-olavarat" className="text-slate-400 hover:text-on-tertiary-container hover:underline underline-offset-4 transition-all text-sm font-medium">GitHub</a>
        <a href="https://www.credential.net/profile/sandeep-s/wallet" className="text-slate-400 hover:text-on-tertiary-container hover:underline underline-offset-4 transition-all text-sm font-medium">Certifications</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-on-tertiary-container selection:text-white">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Metrics />
        <Skills />
        <Timeline />
        <EducationAndCerts />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
