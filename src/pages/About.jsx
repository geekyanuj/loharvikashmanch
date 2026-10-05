const About = () => {
  return (
    <div>
      <section className="hero-section min-h-[40vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center pt-10 md:pt-0">
          <h1 className="text-4xl md:text-5xl mb-2 md:mb-4 font-bold">About Us</h1>
          <p className="text-lg md:text-xl text-white/90">हमारे बारे में</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-4xl px-4 md:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="section-title left text-3xl md:text-4xl">Our Vision <span className="text-2xl block sm:inline sm:ml-2 text-secondary">(हमारा दृष्टिकोण)</span></h2>
            <div className="pl-4 md:pl-6 border-l-4 mt-6 border-primary">
              <p className="mb-4 text-base md:text-lg leading-relaxed text-secondary font-medium">
                To create a progressive, educated, and socio-economically empowered Lohar community in East India, starting from Dhanbad. We envision a society where every individual has access to quality education, healthcare, and equal opportunities for growth.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-secondary font-medium">
                धनबाद से शुरू होकर पूर्वी भारत में एक प्रगतिशील, शिक्षित और सामाजिक-आर्थिक रूप से सशक्त लोहार समुदाय का निर्माण करना। हम एक ऐसे समाज की कल्पना करते हैं जहां प्रत्येक व्यक्ति को गुणवत्तापूर्ण शिक्षा, स्वास्थ्य सेवा और विकास के समान अवसर उपलब्ध हों।
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title left text-3xl md:text-4xl">Our Objectives <span className="text-2xl block sm:inline sm:ml-2 text-secondary">(हमारे उद्देश्य)</span></h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-8">
              {[
                { title: 'Education', desc: 'Provide educational scholarships and guidance to talented youth. (प्रतिभाशाली युवाओं को शैक्षिक छात्रवृत्ति प्रदान करना।)' },
                { title: 'Health', desc: 'Organize health camps and awareness programs. (स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करना।)' },
                { title: 'Culture', desc: 'Promote cultural heritage and social harmony. (सांस्कृतिक विरासत और सामाजिक सद्भाव को बढ़ावा देना।)' },
                { title: 'Support', desc: 'Support community members during emergencies. (आपात स्थिति के दौरान समुदाय का समर्थन करना।)' },
                { title: 'Advocacy', desc: 'Advocate for constitutional rights and representation. (संवैधानिक अधिकारों की वकालत करना।)' }
              ].map((objective, i) => (
                <div key={i} className="card p-4 md:p-6 flex items-start gap-3 md:gap-4 bg-slate-50">
                  <div className="bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm md:text-base">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{objective.title}</h3>
                    <p className="text-secondary text-sm md:text-base">{objective.desc}</p>
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
