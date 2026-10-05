const About = () => {
  return (
    <div>
      <section className="hero-section" style={{ minHeight: '40vh', backgroundImage: 'url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="text-5xl mb-4">About Us</h1>
          <p className="text-xl text-white opacity-90">हमारे बारे में</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl" style={{ maxWidth: '900px' }}>
          <div className="mb-16">
            <h2 className="section-title left">Our Vision (हमारा दृष्टिकोण)</h2>
            <div className="pl-6 border-l-4 mt-6" style={{ borderColor: 'var(--primary-color)' }}>
              <p className="mb-4 text-xl leading-relaxed text-secondary font-medium">
                To create a progressive, educated, and socio-economically empowered Lohar community in East India, starting from Dhanbad. We envision a society where every individual has access to quality education, healthcare, and equal opportunities for growth.
              </p>
              <p className="text-xl leading-relaxed text-secondary font-medium">
                धनबाद से शुरू होकर पूर्वी भारत में एक प्रगतिशील, शिक्षित और सामाजिक-आर्थिक रूप से सशक्त लोहार समुदाय का निर्माण करना। हम एक ऐसे समाज की कल्पना करते हैं जहां प्रत्येक व्यक्ति को गुणवत्तापूर्ण शिक्षा, स्वास्थ्य सेवा और विकास के समान अवसर उपलब्ध हों।
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title left">Our Objectives (हमारे उद्देश्य)</h2>
            <div className="grid grid-cols-1 gap-6 mt-8">
              {[
                { title: 'Education', desc: 'Provide educational scholarships and guidance to talented youth. (प्रतिभाशाली युवाओं को शैक्षिक छात्रवृत्ति प्रदान करना।)' },
                { title: 'Health', desc: 'Organize health camps and awareness programs. (स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करना।)' },
                { title: 'Culture', desc: 'Promote cultural heritage and social harmony. (सांस्कृतिक विरासत और सामाजिक सद्भाव को बढ़ावा देना।)' },
                { title: 'Support', desc: 'Support community members during emergencies. (आपात स्थिति के दौरान समुदाय का समर्थन करना।)' },
                { title: 'Advocacy', desc: 'Advocate for constitutional rights and representation. (संवैधानिक अधिकारों की वकालत करना।)' }
              ].map((objective, i) => (
                <div key={i} className="card p-6 flex items-start gap-4" style={{ backgroundColor: 'var(--bg-color)' }}>
                  <div style={{ background: 'var(--primary-color)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                    <p className="text-secondary text-lg">{objective.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
