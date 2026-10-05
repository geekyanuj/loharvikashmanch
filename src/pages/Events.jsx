import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Community Gathering in Dhanbad',
      date: 'October 15, 2026',
      location: 'Dhanbad Town Hall',
      description: 'Annual meet to discuss community welfare and upcoming educational initiatives. All members are requested to join and share their valuable inputs.',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platform: 'facebook',
      externalLink: 'https://facebook.com'
    },
    {
      id: 2,
      title: 'Youth Scholarship Distribution',
      date: 'November 2, 2026',
      location: 'Community Center, Bokaro',
      description: 'Distributing scholarships to meritorious students of the community to support their higher education.',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platform: 'instagram',
      externalLink: 'https://instagram.com'
    },
    {
      id: 3,
      title: 'Skill Development Workshop Live',
      date: 'November 20, 2026',
      location: 'Online',
      description: 'Join our live stream where industry experts will talk about new technical skills and career paths.',
      imageUrl: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platform: 'youtube',
      externalLink: 'https://youtube.com'
    },
    {
      id: 4,
      title: 'Health Awareness Camp',
      date: 'December 5, 2026',
      location: 'Ranchi',
      description: 'Free medical check-up and health awareness program for all community members.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platform: 'facebook',
      externalLink: 'https://facebook.com'
    }
  ];

  return (
    <div>
      <section className="hero-section" style={{ minHeight: '40vh', backgroundImage: 'url(https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="text-5xl mb-4">Latest Updates & Events</h1>
          <p className="text-xl text-white opacity-90">नवीनतम अपडेट और कार्यक्रम</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
