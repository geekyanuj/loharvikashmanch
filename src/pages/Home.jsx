import { Link } from 'react-router-dom';
import { BookOpen, Users, TrendingUp, HeartHandshake, ArrowRight } from 'lucide-react';
import EventCard from '../components/EventCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="font-bold mb-4 block text-secondary" style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Welcome to / में आपका स्वागत है
          </span>
          <h1 className="text-5xl mb-6">Lohar Vikash Manch</h1>
          <p className="text-xl mb-8 max-w-2xl text-white" style={{ opacity: 0.9 }}>
            Uniting the community for progress, education, and social empowerment in Dhanbad and surrounding regions of East India.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/about" className="btn btn-primary">
              Discover Our Mission <ArrowRight size={20} className="ml-2" style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline text-white" style={{ borderColor: 'white' }}>
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--bg-color)', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="text-secondary font-semibold">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="text-secondary font-semibold">Events Organized</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="text-secondary font-semibold">Students Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="text-secondary font-semibold">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title left">Empowering Our Community</h2>
            <p className="text-lg text-secondary mb-6 mt-6">
              Our vision is to create a progressive, educated, and socio-economically empowered Lohar community. We believe in providing equal opportunities for growth, focusing strongly on youth education and skill development.
            </p>
            <p className="text-lg text-secondary mb-8">
              हमारा दृष्टिकोण एक प्रगतिशील, शिक्षित और सामाजिक-आर्थिक रूप से सशक्त लोहार समुदाय का निर्माण करना है। हम युवाओं की शिक्षा और कौशल विकास पर जोर देते हुए विकास के समान अवसर प्रदान करने में विश्वास करते हैं।
            </p>
            <Link to="/about" className="btn btn-outline">Read Full Story</Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Community Meeting" 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} 
            />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--primary-color)', color: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
              <div className="text-2xl font-bold mb-1">Established</div>
              <div className="text-xl">2011</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container text-center">
          <h2 className="section-title">Our Focus Areas</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-12" style={{ margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            We work across multiple domains to ensure holistic development and empowerment of our people.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="card p-8">
              <div className="feature-icon-wrapper">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Education</h3>
              <p className="text-secondary">Providing scholarships, career counseling, and resources to talented youth to pursue higher education.</p>
            </div>
            
            <div className="card p-8">
              <div className="feature-icon-wrapper">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Empowerment</h3>
              <p className="text-secondary">Organizing skill development workshops and supporting entrepreneurship within the community.</p>
            </div>
            
            <div className="card p-8">
              <div className="feature-icon-wrapper">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Social Welfare</h3>
              <p className="text-secondary">Supporting families during emergencies, organizing health camps, and promoting cultural harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Snippet */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title left" style={{ marginBottom: 0 }}>Recent Activities</h2>
            </div>
            <Link to="/events" className="btn btn-outline hidden md:flex">View All Events</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard 
              title="Community Gathering in Dhanbad"
              date="October 15, 2026"
              location="Dhanbad Town Hall"
              description="Annual meet to discuss community welfare and upcoming educational initiatives."
              imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              platform="facebook"
              externalLink="https://facebook.com"
            />
            <EventCard 
              title="Youth Scholarship Distribution"
              date="November 2, 2026"
              location="Bokaro"
              description="Distributing scholarships to meritorious students of the community to support their higher education."
              imageUrl="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              platform="instagram"
              externalLink="https://instagram.com"
            />
            <EventCard 
              title="Skill Development Workshop"
              date="November 20, 2026"
              location="Online"
              description="Join our live stream where industry experts will talk about new technical skills and career paths."
              imageUrl="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              platform="youtube"
              externalLink="https://youtube.com"
            />
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/events" className="btn btn-outline">View All Events</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-sm">
          <h2 className="text-4xl font-bold mb-6">Be a Part of the Change</h2>
          <p className="text-xl mb-8" style={{ opacity: 0.9 }}>
            Whether you want to become a member, volunteer for our events, or support our cause, your contribution matters.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-white text-primary">Join the Community</Link>
            <Link to="/contact" className="btn btn-outline text-white" style={{ borderColor: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
