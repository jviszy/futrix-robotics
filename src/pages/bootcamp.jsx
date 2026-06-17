import {
  ArrowLeft,
  Banknote,
  Mail,
  Phone,
  Upload,
  MapPin,
  Code,
  Cpu,
  BrainCircuit,
  Palette,
  Sparkles,
  FileText,
  ShieldCheck,
  Monitor,
} from "lucide-react";
import "../App.css";

function Bootcamp() {
  const courses = [
    "Scratch Programming",
    "MIT App Inventor",
    "Robotics & Arduino",
    "Introduction to Artificial Intelligence",
    "2D Animation Bootcamp",
    "Whiteboard Animation",
    "Microsoft Office for Kids",
    "Internet & Digital Literacy",
  ];

  return (
    <div className="bootcamp-page">
      <header className="bootcamp-page-header">
        <a href="/" className="back-home">
          <ArrowLeft size={18} />
          Back to Home
        </a>

        <h1>FuTriX Robotics Holiday Bootcamp</h1>
        <p>
          Register for technology, coding, robotics, animation, AI, and digital
          skills bootcamp for kids and teenagers.
        </p>
      </header>

      <section className="bootcamp-details-grid">
        <div className="bootcamp-info-card">
          <Banknote />
          <h2>Bootcamp Fee</h2>
          <strong>₦30,000</strong>
          <p>Per participant.</p>
        </div>

        <div className="bootcamp-info-card">
          <MapPin />
          <h2>Location</h2>
          <p>
            The bootcamp will happen in different states. Select your preferred
            state in the form.
          </p>
        </div>

        <div className="bootcamp-info-card">
          <Phone />
          <h2>Admin Contact</h2>
          <p>WhatsApp: +234 816 851 1163</p>
          <p>Email: info@futrixrobotics.com.ng</p>
        </div>
      </section>

      <section className="bootcamp-payment-section">
        <div>
          <p className="section-kicker">Payment Information</p>
          <h2>Make Payment Before Submitting</h2>
          <p>
            After payment, upload your receipt in the registration form below.
          </p>
        </div>

        <div className="payment-details-box">
          <p><strong>Bank:</strong> First Bank</p>
          <p><strong>Account Number:</strong> 3078999889</p>
          <p><strong>Account Name:</strong> Olugbemi Oluwatosin Jimmy</p>
        </div>
      </section>

      <section className="bootcamp-course-summary">
        <h2>Available Bootcamps</h2>

        <div className="summary-grid">
          <CourseMini icon={<Code />} title="Scratch Programming" />
          <CourseMini icon={<Monitor />} title="MIT App Inventor" />
          <CourseMini icon={<Cpu />} title="Robotics & Arduino" />
          <CourseMini icon={<BrainCircuit />} title="Introduction to AI" />
          <CourseMini icon={<Palette />} title="2D Animation" />
          <CourseMini icon={<Sparkles />} title="Whiteboard Animation" />
          <CourseMini icon={<FileText />} title="Microsoft Office" />
          <CourseMini icon={<ShieldCheck />} title="Digital Literacy" />
        </div>
      </section>

      <section className="bootcamp-register-section">
        <div>
          <p className="section-kicker">Registration Form</p>
          <h2>Register for a Bootcamp</h2>
          <p>
            Fill in the details below. Receipt upload is required after payment.
          </p>
        </div>

        <form className="bootcamp-page-form">
          <input type="text" placeholder="Parent/Guardian Name *" required />
          <input type="text" placeholder="Student Name *" required />
          <input type="number" placeholder="Student Age *" required />
          <input type="tel" placeholder="Phone Number *" required />
          <input type="email" placeholder="Email Address *" required />

          <select required>
            <option value="">Select Preferred State/Location *</option>
            <option>Abuja</option>
            <option>Lagos</option>
            <option>Ogun</option>
            <option>Oyo</option>
            <option>Rivers</option>
            <option>Kano</option>
            <option>Kaduna</option>
            <option>Other</option>
          </select>

          <select required>
            <option value="">Select Bootcamp *</option>
            {courses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>

          <label className="receipt-upload page-upload">
            <Upload size={20} />
            Upload Payment Receipt *
            <input type="file" accept="image/*,.pdf" required />
          </label>

          <textarea placeholder="Additional Notes"></textarea>

          <button type="submit">Submit Registration</button>
        </form>
      </section>

      <footer className="bootcamp-page-footer">
        <p>Need help?</p>
        <a href="https://wa.me/2348168511163" target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
        <a href="mailto:info@futrixrobotics.com.ng">
          Send Email
        </a>
      </footer>
    </div>
  );
}

function CourseMini({ icon, title }) {
  return (
    <div className="course-mini">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default Bootcamp;