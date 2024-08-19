import React, { useState } from 'react';
import { FaChartLine, FaChessKnight, FaCogs, FaGraduationCap, FaLightbulb, FaPuzzlePiece, FaRocket, FaLinkedin } from 'react-icons/fa';
import './App.css';

// Define the team members with their names, titles, descriptions, LinkedIn URLs, and image URLs
const teamMembers = [
  {
    name: "Yariv",
    title: "AI Expert",
    description: ".",
    linkedin: "https://www.linkedin.com/in/yarivzlevy/",
    image: `${process.env.PUBLIC_URL}/team-placeholder.jpg`,
  },
  {
    name: "Sara",
    title: "Product",
    description: "flapper",
    linkedin: "https://www.linkedin.com/in/sara-landitortoli/",
    image: `${process.env.PUBLIC_URL}/team-placeholder.jpg`,
  },
  {
    name: "Ben",
    title: "Consulting",
    description: "",
    linkedin: "https://www.linkedin.com/in/ben-torben-nielsen/",
    image: `${process.env.PUBLIC_URL}/btn_pic.jpg`,
  },
  {
    name: "Marco",
    title: "Data Scientist",
    description: "",
    linkedin: "https://www.linkedin.com/in/marco-babini/",
    image: `${process.env.PUBLIC_URL}/team-placeholder.jpg`,
  },
  {
    name: "Andra",
    title: "AI Consultant",
    description: "",
    linkedin: "https://www.linkedin.com/in/andrakopandi/",
    image: `${process.env.PUBLIC_URL}/team-placeholder.jpg`,
  },
];

// Define the services with their titles, descriptions, and icons
const services = [
  { title: "Readiness Assessment", description: "Assess your organization's readiness for AI adoption and identify key opportunities.", icon: FaChartLine },
  { title: "AI Strategy Development", description: "Develop a tailored AI strategy aligned with your business objectives.", icon: FaChessKnight },
  { title: "Custom AI Solutions", description: "Create customized AI solutions that solve your specific business challenges.", icon: FaCogs },
  { title: "Training and Education", description: "Provide training and educational resources to empower your team with AI knowledge.", icon: FaGraduationCap },
];

// Define the approach steps with their titles, descriptions, and icons
const approachSteps = [
  { name: "Initial Consulting and Needs Assessment", description: "Understand your business challenges and define AI goals.", icon: FaLightbulb },
  { name: "Customized Strategy Development", description: "Design a tailored AI strategy based on your unique requirements.", icon: FaChessKnight },
  { name: "AI Solution Design and Development", description: "Create bespoke AI solutions using the latest technologies.", icon: FaCogs },
  { name: "Implementation and Integration", description: "Seamlessly integrate AI solutions into your existing infrastructure.", icon: FaPuzzlePiece },
  { name: "Training and Workshops", description: "Provide hands-on training to ensure successful adoption.", icon: FaGraduationCap },
  { name: "Ongoing Support and Optimization", description: "Continuous monitoring and refinement for optimal performance.", icon: FaRocket },
  { name: "Scalability and Future Enhancements", description: "Plan for future growth and expansion with scalable AI solutions.", icon: FaChartLine },
];

// Component for displaying each service tile
const Tile = ({ title, description, icon: Icon }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`tile ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="tile-inner bg-white dark:bg-gray-700">
        <div className="tile-front flex flex-col items-center justify-center">
          <Icon className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
        </div>
        <div className="tile-back flex items-center justify-center">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Component for displaying each team member
const TeamMember = ({ name, title, description, linkedin, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative w-40 h-40 overflow-hidden rounded-full mx-auto cursor-pointer"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      {showDetails && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4">
          <h4 className="text-white text-lg font-semibold">{name}</h4>
          <p className="text-gray-300 text-sm">{title}</p>
          <p className="text-gray-400 text-xs mt-2">{description}</p>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
            <FaLinkedin className="text-blue-400 text-2xl" />
          </a>
        </div>
      )}
    </div>
  );
};

// Main App component
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Navigation Bar with Dark Mode Toggle */}
      <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
        <nav className="flex justify-center space-x-6 w-full">
          <button onClick={() => scrollToSection('services')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection('approach')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Approach</button>
          <button onClick={() => scrollToSection('team')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Team</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact Us</button>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Logo and Company Name */}
      <div className="container mx-auto text-center py-10">
        <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt="Logo" className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-black dark:text-white">My Amazing Company</h1>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-10">Comprehensive AI Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Tile key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">Our Proven Approach to AI Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {approachSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <step.icon className="text-2xl text-blue-600 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-black dark:text-white">{step.name}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-10">Meet the Team Behind Your AI Transformation</h2>
          <p className="text-lg text-black dark:text-white mb-10">We are a team of AI and business strategy experts with deep experience in developing and implementing AI solutions across various industries.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
                linkedin={member.linkedin}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Amazing Company. All rights reserved.</p>
          <p>
            <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white">Services</button> |
            <button onClick={() => scrollToSection('approach')} className="text-gray-400 hover:text-white">Approach</button> |
            <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-white">Team</button> |
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact Us</button>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;