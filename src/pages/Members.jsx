const Members = () => {
  const members = [
    { name: 'Rajesh Sharma', role: 'President', roleHi: 'अध्यक्ष', location: 'Dhanbad', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Amit Kumar', role: 'Secretary', roleHi: 'सचिव', location: 'Bokaro', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Suresh Vishwakarma', role: 'Treasurer', roleHi: 'कोषाध्यक्ष', location: 'Ranchi', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Vikas Lohar', role: 'Executive Member', roleHi: 'कार्यकारी सदस्य', location: 'Jamshedpur', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Priya Sharma', role: 'Women Wing Head', roleHi: 'महिला विंग प्रमुख', location: 'Dhanbad', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Rahul Kumar', role: 'Youth Coordinator', roleHi: 'युवा समन्वयक', location: 'Sindri', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div>
      <section className="hero-section" style={{ minHeight: '40vh', backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="text-5xl mb-4">Our Committee Members</h1>
          <p className="text-xl text-white opacity-90">हमारे समिति सदस्य</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member, index) => (
              <div key={index} className="card p-8 text-center flex flex-col items-center">
                <div style={{ position: 'relative', width: '140px', height: '140px', margin: '0 auto 1.5rem' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ position: 'relative', zIndex: '1', width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary-color)' }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-1" style={{ fontSize: '1.1rem' }}>{member.role}</p>
                <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>{member.roleHi}</p>
                
                <div className="mt-auto pt-4 border-t w-full" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-secondary font-medium flex items-center justify-center gap-2">
                    📍 {member.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-gray-50 rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}>
            <h2 className="text-4xl font-bold mb-4">Want to become a member?</h2>
            <p className="text-secondary mb-8 text-xl max-w-2xl mx-auto">
              Join our hands in making the community stronger and better for the future generation.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Join Now / अभी जुड़ें</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
