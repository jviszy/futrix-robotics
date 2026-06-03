import {
  Menu,
  X,
  Cpu,
  Bot,
  Code,
  Trophy,
  Users,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Rocket,
  BrainCircuit,
  GraduationCap,
  Handshake,
  Newspaper,
  Globe2,
  ShieldCheck,
  Wrench,
  Target,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

import logo from "./assets/futrix-logo.jpeg";
import heroImage from "./assets/robot-arm-hero.png";
import studentsBuilding from "./assets/students-building.png";
import ftcRobot from "./assets/ftc-robot.png";
import ftcRobotArm from "./assets/ftc-robot-arm.png";
import heroRacing from "./assets/hero-racing.png";
import battleBot from "./assets/battle-bot.png";
import surveillanceRobot from "./assets/surveillance-robot.png";
import robotChassis from "./assets/robot-chasis.jpeg";
import winners from "./assets/winners.jpeg";
import teamPhoto from "./assets/team-photo.jpeg";

function App() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Programs", "programs"],
    ["Competitions", "competitions"],
    ["Innovation Lab", "innovation"],
    ["Gallery", "gallery"],
    ["Partnerships", "partnerships"],
    ["News", "news"],
    ["Contact", "contact"],
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <div className="noise"></div>
      <div className="cursor-glow"></div>

      <header className="navbar">
        <div className="brand" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Futrix Robotics Logo" />
          <div>
            <span>FuTriX</span>
            <small>Robotics</small>
          </div>
        </div>

        <nav className={open ? "nav-links active" : "nav-links"}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-bg">
          <img src={heroImage} alt="Futrix robotics arm" />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="tag">
              <Sparkles size={16} />
              Future Technology in Action
            </p>

            <h1>
              Engineering Africa’s Next Generation of <span>Innovators</span>
            </h1>

            <p className="hero-text">
              FuTriX Robotics empowers students, schools, educators, and
              communities through robotics, coding, AI, engineering design,
              drone technology, STEM racing, and innovation challenges.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollToSection("programs")}>
                Enroll a Student <ArrowRight size={18} />
              </button>

              <button onClick={() => scrollToSection("partnerships")} className="outline">
                Partner With Us
              </button>

              <button onClick={() => scrollToSection("contact")} className="outline">
                Contact Us
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>Build</strong>
                <span>Hands-on robotics</span>
              </div>
              <div>
                <strong>Code</strong>
                <span>AI & automation</span>
              </div>
              <div>
                <strong>Compete</strong>
                <span>STEM challenges</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <p className="section-kicker">The Futrix Journey</p>
          <h2>From Curiosity to National Recognition</h2>
        </Reveal>

        <div className="story-grid">
          <Reveal delay={0.1}>
            <StoryCard number="2018" title="UNESCO ICT Winner" text="Students trained through the Futrix journey began gaining recognition in national technology competitions." />
          </Reveal>

          <Reveal delay={0.2}>
            <StoryCard number="2019" title="FME ICT Week Champion" text="Futrix students competed across computer assembly, Scratch programming, web design, and robot games." />
          </Reveal>

          <Reveal delay={0.3}>
            <StoryCard number="2022" title="FTC & FLL Awards" text="The team expanded into national robotics competitions, building stronger engineering and innovation capacity." />
          </Reveal>

          <Reveal delay={0.4}>
            <StoryCard number="2026" title="Global Stage" text="Futrix-trained teams earned international recognition and prepared to represent Nigeria globally." />
          </Reveal>
        </div>
      </section>

      <section className="stats-section">
        <Stat value="1000+" label="Students Inspired" />
        <Stat value="20+" label="Schools Reached" />
        <Stat value="15+" label="Awards & Recognitions" />
        <Stat value="7+" label="Years of Impact" />
      </section>

      <section id="about" className="section about-section">
        <div className="split">
          <Reveal>
            <p className="section-kicker">Who We Are</p>
            <h2>Building Future-Ready Technology Leaders</h2>
            <p>
              FuTriX Robotics is a STEM and technology education organization
              dedicated to developing future innovators, engineers, inventors,
              and technology leaders through practical, hands-on learning
              experiences.
            </p>

            <div className="mini-grid">
              <InfoCard icon={<Rocket />} title="Mission" text="Make robotics, STEM, AI, and emerging technologies accessible through practical education." />
              <InfoCard icon={<GraduationCap />} title="Learning" text="Students learn by building, testing, improving, collaborating, and competing." />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="image-frame">
              <img src={studentsBuilding} alt="Students building robot" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programs" className="section dark">
        <Reveal>
          <p className="section-kicker">Learning Pathways</p>
          <h2>Programs Designed for Real-World Innovation</h2>
          <p>
            From school robotics to private training, weekend classes, AI,
            drone technology, coding, 3D design, and teacher training, Futrix
            creates practical learning experiences for young innovators.
          </p>
        </Reveal>

        <div className="program-grid image-programs">
          <ImageProgram image={ftcRobot} icon={<Bot />} title="STEM Robotics for Schools" text="Primary, secondary, private, and weekend robotics programs." />
          <ImageProgram image={ftcRobotArm} icon={<Cpu />} title="FTC Robotics Engineering" text="Competition-ready mechanical design, sensors, lift systems, and control." />
          <ImageProgram image={robotChassis} icon={<Code />} title="Coding, AI & Automation" text="Coding fundamentals, AI learning, IoT, and digital technology skills." />
          <ImageProgram image={surveillanceRobot} icon={<BrainCircuit />} title="Innovation & R&D" text="Students explore smart systems, surveillance robotics, and applied engineering." />
        </div>
      </section>

      <section id="competitions" className="section competitions-section">
        <Reveal>
          <p className="section-kicker">Build. Race. Compete. Win.</p>
          <h2>Robotics Competitions & STEM Challenges</h2>
          <p>
            Futrix prepares students to compete, collaborate, test, and showcase
            creativity through robotics championships, STEM racing, battle-bot
            engineering, and national innovation challenges.
          </p>
        </Reveal>

        <div className="competition-showcase">
          <ShowcaseCard image={heroRacing} title="STEM RC Racing" text="Students design, build, tune, code, test, race, and optimize RC robots for performance." />
          <ShowcaseCard image={battleBot} title="Battle-Bot Engineering" text="Built for strength, strategy, control, durability, and competitive engineering." />
        </div>
      </section>

      <section id="innovation" className="section dark">
        <Reveal>
          <p className="section-kicker">Innovation Lab</p>
          <h2>Where Ideas Become Working Robots</h2>
        </Reveal>

        <div className="lab-showcase">
          <div className="lab-copy">
            <h3>Hands-on technology, not theory alone.</h3>
            <p>
              Students work with robotics kits, electronics, sensors, AI tools,
              chassis platforms, mechanical systems, drones, 3D design, and
              engineering thinking.
            </p>

            <div className="lab-points">
              <span><Wrench /> Build</span>
              <span><Code /> Program</span>
              <span><Target /> Test</span>
              <span><Rocket /> Improve</span>
            </div>
          </div>

          <div className="lab-images">
            <img src={ftcRobotArm} alt="FTC robot arm" />
            <img src={surveillanceRobot} alt="Futrix surveillance robot" />
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <Reveal>
          <p className="section-kicker">Gallery</p>
          <h2>Real Projects. Real Students. Real Impact.</h2>
        </Reveal>

        <div className="real-gallery">
          <GalleryItem image={studentsBuilding} title="Workshop Sessions" />
          <GalleryItem image={teamPhoto} title="National Competitions" />
          <GalleryItem image={winners} title="Student Winners" />
          <GalleryItem image={ftcRobot} title="FTC Robotics" />
          <GalleryItem image={battleBot} title="Battle Bots" />
          <GalleryItem image={surveillanceRobot} title="Product Innovation" />
        </div>
      </section>

      <section id="partnerships" className="section dark">
        <Reveal>
          <p className="section-kicker">Partnerships</p>
          <h2>Bring Robotics and STEM to Your School</h2>
          <p>
            Futrix partners with schools, government agencies, NGOs, sponsors,
            and individuals to expand access to robotics and future-ready STEM
            education.
          </p>
        </Reveal>

        <div className="partner-strip">
          <div><Handshake /> Schools</div>
          <div><ShieldCheck /> Government</div>
          <div><Users /> NGOs</div>
          <div><Trophy /> Sponsors</div>
          <div><BrainCircuit /> Innovation Partners</div>
        </div>
      </section>

      <section id="news" className="section">
        <Reveal>
          <p className="section-kicker">News & Events</p>
          <h2>Latest Updates From Futrix Robotics</h2>
        </Reveal>

        <div className="news-card">
          <Newspaper size={44} />
          <div>
            <h3>Competition updates, workshops, student achievements, and training announcements will appear here.</h3>
            <p>
              This section can later become a full news page with articles,
              event updates, and media coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <Reveal>
          <h2>Ready to Join Futrix Robotics?</h2>
          <p>
            Register a student, bring Futrix to your school, or partner with us
            to build Africa’s next generation of innovators.
          </p>

          <div className="hero-buttons center">
            <button onClick={() => scrollToSection("contact")}>Register a Student</button>
            <button onClick={() => scrollToSection("contact")} className="outline">Register Your School</button>
            <button onClick={() => scrollToSection("partnerships")} className="outline">Become a Partner</button>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section contact">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2>Start the Conversation</h2>
          <p>
            Register your school, enroll a student, partner with Futrix, or ask
            about robotics training and competitions.
          </p>
        </Reveal>

        <div className="contact-grid">
          <ContactCard icon={<MapPin />} title="Office Address" text="Utako FCT Abuja" />
          <ContactCard icon={<Phone />} title="Phone" text="09076439070" />
          <ContactCard icon={<Mail />} title="Email" text="info@FuTriXRobotics.com.ng" />
        </div>
      </section>

      <footer className="tech-footer">
        <div className="footer-rail">
          <div><MapPin /><span>Utako FCT Abuja</span></div>
          <div><Phone /><span>09076439070</span></div>
          <div><Mail /><span>info@FuTriXRobotics.com.ng</span></div>
          <div><Globe2 /><span>FuTriXRobotics.com.ng</span></div>
        </div>

        <p>© 2026 Futrix Robotics. Future Technology in Action.</p>
      </footer>
    </div>
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function StoryCard({ number, title, text }) {
  return (
    <div className="story-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="info-card">
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ImageProgram({ image, icon, title, text }) {
  return (
    <div className="image-program-card">
      <img src={image} alt={title} />
      <div>
        <div className="program-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ShowcaseCard({ image, title, text }) {
  return (
    <div className="showcase-card">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function GalleryItem({ image, title }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} />
      <div>{title}</div>
    </div>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="contact-card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;