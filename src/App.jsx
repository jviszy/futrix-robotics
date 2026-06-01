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
  Images,
  Newspaper,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./assets/futrix-logo.jpeg";

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
            <span>Futrix</span>
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
              Building Africa’s Next Generation of{" "}
              <span>Innovators</span>
            </h1>

            <p className="hero-text">
              Futrix Robotics empowers students, schools, educators, and
              communities through hands-on robotics, coding, AI, drone
              technology, engineering design, and innovation challenges.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollToSection("programs")}>
                Enroll a Student <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollToSection("partnerships")}
                className="outline"
              >
                Partner With Us
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="outline"
              >
                Contact Us
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>STEM</strong>
                <span>Education</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Learning</span>
              </div>
              <div>
                <strong>Robotics</strong>
                <span>Competitions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="robot-stage"
            initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <motion.div
              className="robot-core"
              animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bot size={150} />
              <div className="robot-light"></div>
            </motion.div>

            <div className="floating-chip chip-one">
              <Cpu size={22} />
              Robotics
            </div>

            <div className="floating-chip chip-two">
              <BrainCircuit size={22} />
              AI Labs
            </div>

            <div className="floating-chip chip-three">
              <Rocket size={22} />
              Innovation
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      <StorySection />

      <section id="about" className="section about-section">
        <Reveal>
          <p className="section-kicker">Who We Are</p>
          <h2>About Futrix Robotics</h2>
          <p>
            Futrix Robotics is a STEM and technology education organization
            dedicated to developing future innovators, engineers, inventors, and
            technology leaders through practical, hands-on learning experiences.
          </p>
        </Reveal>

        <div className="about-cards">
          <Reveal delay={0.1}>
            <InfoCard
              icon={<Rocket />}
              title="Our Mission"
              text="To make robotics, STEM, AI, and emerging technologies accessible to students and schools through practical education."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <InfoCard
              icon={<Sparkles />}
              title="Our Vision"
              text="To raise a generation of African innovators who can solve real-world problems with technology."
            />
          </Reveal>

          <Reveal delay={0.3}>
            <InfoCard
              icon={<GraduationCap />}
              title="Why It Matters"
              text="Robotics education builds creativity, problem-solving, engineering thinking, collaboration, and digital confidence."
            />
          </Reveal>
        </div>
      </section>

      <section id="programs" className="section dark">
        <Reveal>
          <p className="section-kicker">Learning Pathways</p>
          <h2>Our Programs</h2>
          <p>
            From school programs to private training, weekend classes, coding,
            AI, drone technology, and 3D design, Futrix Robotics creates
            practical learning experiences for young innovators.
          </p>
        </Reveal>

        <div className="program-grid">
          <Reveal delay={0.1}>
            <ProgramCard
              icon={<Bot />}
              title="STEM Robotics for Schools"
              items={[
                "Primary School Program",
                "Secondary School Program",
                "Private Training Program",
                "Weekend Training Program",
              ]}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <ProgramCard
              icon={<Code />}
              title="Coding & AI Classes"
              items={[
                "Coding fundamentals",
                "Artificial Intelligence",
                "Digital literacy",
                "Problem-solving skills",
              ]}
            />
          </Reveal>

          <Reveal delay={0.3}>
            <ProgramCard
              icon={<Cpu />}
              title="Emerging Technology"
              items={[
                "Drone Technology",
                "3D Printing & Design",
                "Engineering Design",
                "Real-world applications",
              ]}
            />
          </Reveal>

          <Reveal delay={0.4}>
            <ProgramCard
              icon={<Users />}
              title="Teacher Training"
              items={[
                "STEM curriculum implementation",
                "Robotics facilitation",
                "Classroom innovation",
                "Practical teaching support",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section id="competitions" className="section competitions-section">
        <Reveal>
          <p className="section-kicker">Challenges & Tournaments</p>
          <h2>Competitions</h2>
          <p>
            Futrix Robotics prepares students to compete, collaborate, build,
            test, and showcase their creativity through local and international
            robotics competitions.
          </p>
        </Reveal>

        <div className="timeline">
          <Reveal delay={0.1}>
            <TimelineItem
              title="East Africa Open Robotics Championship Uganda 2026"
              text="Competition overview, categories, rules, registration, and preparation support."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <TimelineItem
              title="National Robotics Championship"
              text="Previous winners, gallery, results, awards, and student achievement stories."
            />
          </Reveal>

          <Reveal delay={0.3}>
            <TimelineItem
              title="RC Car Racing & 4x4 Challenge"
              text="Track design, competition format, team registration, and live challenge experience."
            />
          </Reveal>
        </div>
      </section>

      <section id="innovation" className="section dark lab-section">
        <Reveal>
          <p className="section-kicker">Build. Test. Improve.</p>
          <h2>Innovation Lab</h2>
          <p>
            A creative space where students move from ideas to prototypes using
            robotics kits, AI tools, drones, 3D design, sensors, electronics,
            and engineering thinking.
          </p>
        </Reveal>

        <div className="lab-visual">
          <div className="lab-card large">
            <BrainCircuit size={64} />
            <h3>AI + Robotics</h3>
          </div>
          <div className="lab-card">
            <Cpu size={42} />
            <h3>Electronics</h3>
          </div>
          <div className="lab-card">
            <Rocket size={42} />
            <h3>Prototyping</h3>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <Reveal>
          <p className="section-kicker">Student Projects</p>
          <h2>Projects Gallery</h2>
          <p>
            This section will showcase workshop photos, competition videos,
            student-built robots, awards, experiments, and project descriptions.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {["Workshops", "Robotics Projects", "Competitions", "Awards"].map(
            (item, index) => (
              <Reveal key={item} delay={index * 0.1}>
                <div className="gallery-card">
                  <Images size={40} />
                  <h3>{item}</h3>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section id="partnerships" className="section dark">
        <Reveal>
          <p className="section-kicker">Work With Us</p>
          <h2>Partnerships</h2>
          <p>
            Futrix Robotics partners with schools, government agencies, NGOs,
            corporate sponsors, and individuals to expand access to robotics and
            STEM education across communities.
          </p>
        </Reveal>

        <div className="partner-strip">
          <div><Handshake /> Schools</div>
          <div><Handshake /> NGOs</div>
          <div><Handshake /> Sponsors</div>
          <div><Handshake /> Government</div>
          <div><Handshake /> Individuals</div>
        </div>
      </section>

      <section id="news" className="section">
        <Reveal>
          <p className="section-kicker">Latest Updates</p>
          <h2>News & Events</h2>
          <p>
            Updates on workshops, competitions, partnerships, student
            achievements, robotics events, and upcoming training opportunities.
          </p>
        </Reveal>

        <div className="news-card">
          <Newspaper size={44} />
          <div>
            <h3>Upcoming Futrix Robotics updates will appear here.</h3>
            <p>
              Add blog posts, event announcements, competition results, and
              student success stories later.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <Reveal>
          <p className="section-kicker">Start the Conversation</p>
          <h2>Contact Futrix Robotics</h2>
          <p>
            Register your school, enroll a student, partner with Futrix, or ask
            about robotics training and competitions.
          </p>
        </Reveal>

        <div className="contact-grid">
          <div className="contact-card">
            <MapPin />
            <h3>Office Address</h3>
            <p>Utako, Abuja</p>
          </div>

          <div className="contact-card">
            <Phone />
            <h3>Phone</h3>
            <p>09076439070</p>
          </div>

          <div className="contact-card">
            <Mail />
            <h3>Email</h3>
            <p>info@FuTriXRobotics.com.ng</p>
          </div>
        </div>
      </section>

      <footer>
        <img src={logo} alt="Futrix Robotics Logo" />
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

function InfoCard({ icon, title, text }) {
  return (
    <div className="info-card">
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ProgramCard({ icon, title, items }) {
  return (
    <div className="program-card">
      <div className="program-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ title, text }) {
  return (
    <div className="timeline-item">
      <span></span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="story-section">
      <Reveal>
        <p className="section-kicker">The Futrix Story</p>
        <h2>From Curiosity to Creation</h2>
      </Reveal>

      <div className="story-grid">
        <Reveal delay={0.1}>
          <div className="story-card">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Students are introduced to robotics, coding, AI, and engineering
              through exciting real-world examples.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="story-card">
            <span>02</span>
            <h3>Build</h3>
            <p>
              They work with tools, kits, circuits, sensors, and code to turn
              ideas into working prototypes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="story-card">
            <span>03</span>
            <h3>Compete</h3>
            <p>
              Students test their skills in robotics competitions, innovation
              challenges, RC racing, and STEM showcases.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="story-card">
            <span>04</span>
            <h3>Lead</h3>
            <p>
              They grow into confident young innovators ready to solve problems
              with technology.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default App;