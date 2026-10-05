import { Link } from 'react-router-dom';
import { BookOpen, Users, TrendingUp, HeartHandshake, ArrowRight } from 'lucide-react';
import EventCard from '../components/EventCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh] md:min-h-[80vh]">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center md:text-left pt-12 md:pt-0">
          <span className="font-bold mb-2 md:mb-4 block text-secondary text-sm md:text-lg tracking-widest uppercase">
            Welcome to / आपका स्वागत है
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-extrabold leading-tight">Lohar Vikash Manch</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90 mx-auto md:mx-0">
            Uniting the community for progress, education, and social empowerment in Dhanbad and surrounding regions of East India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/about" className="btn btn-primary w-full sm:w-auto">
              Discover Our Mission <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-slate-50 relative z-10 -mt-6 md:-mt-12 rounded-t-3xl md:rounded-none">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="stat-card p-4 md:p-8">
              <div className="stat-number text-3xl md:text-5xl">5K+</div>
              <div className="text-secondary font-semibold text-sm md:text-base">Active Members</div>
            </div>
            <div className="stat-card p-4 md:p-8">
              <div className="stat-number text-3xl md:text-5xl">50+</div>
              <div className="text-secondary font-semibold text-sm md:text-base">Events Organized</div>
            </div>
            <div className="stat-card p-4 md:p-8">
              <div className="stat-number text-3xl md:text-5xl">200+</div>
              <div className="text-secondary font-semibold text-sm md:text-base">Students Supported</div>
            </div>
            <div className="stat-card p-4 md:p-8">
              <div className="stat-number text-3xl md:text-5xl">15</div>
              <div className="text-secondary font-semibold text-sm md:text-base">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center md:text-left">
            <h2 className="section-title left text-3xl md:text-4xl">Empowering Our Community</h2>
            <p className="text-base md:text-lg text-secondary mb-4 md:mb-6 mt-4 md:mt-6">
              Our vision is to create a progressive, educated, and socio-economically empowered Lohar community. We believe in providing equal opportunities for growth, focusing strongly on youth education and skill development.
            </p>
            <p className="text-base md:text-lg text-secondary mb-6 md:mb-8">
              हमारा दृष्टिकोण एक प्रगतिशील, शिक्षित और सामाजिक-आर्थिक रूप से सशक्त लोहार समुदाय का निर्माण करना है। हम युवाओं की शिक्षा और कौशल विकास पर जोर देते हुए विकास के समान अवसर प्रदान करने में विश्वास करते हैं।
            </p>
            <Link to="/about" className="btn btn-outline w-full sm:w-auto">Read Full Story</Link>
          </div>
          <div className="relative order-1 lg:order-2 px-4 md:px-0">
            <img 
              src="/community-meeting.jpg" 
              alt="Community Meeting" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-white p-4 md:p-6 rounded-xl shadow-md hidden sm:block">
              <div className="text-xl md:text-2xl font-bold mb-1">Established</div>
              <div className="text-lg md:text-xl">2011</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="section-title text-3xl md:text-4xl">Our Focus Areas</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg px-4">
            We work across multiple domains to ensure holistic development and empowerment of our people.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="card p-6 md:p-8 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="feature-icon-wrapper">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Education</h3>
              <p className="text-secondary text-sm md:text-base">Providing scholarships, career counseling, and resources to talented youth to pursue higher education.</p>
            </div>
            
            <div className="card p-6 md:p-8 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="feature-icon-wrapper">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Empowerment</h3>
              <p className="text-secondary text-sm md:text-base">Organizing skill development workshops and supporting entrepreneurship within the community.</p>
            </div>
            
            <div className="card p-6 md:p-8 flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1">
              <div className="feature-icon-wrapper">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Social Welfare</h3>
              <p className="text-secondary text-sm md:text-base">Supporting families during emergencies, organizing health camps, and promoting cultural harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Snippet */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="section-title text-3xl md:text-4xl mb-0">Recent Activities</h2>
            </div>
            <Link to="/events" className="btn btn-outline hidden md:flex">View All Events</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <div className="hidden lg:block">
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
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/events" className="btn btn-outline w-full">View All Events</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-12 md:py-20 px-4">
        <div className="container-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Be a Part of the Change</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
            Whether you want to become a member, volunteer for our events, or support our cause, your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-primary w-full sm:w-auto">Join the Community</Link>
            <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
