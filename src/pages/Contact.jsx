import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <section className="hero-section" style={{ minHeight: '40vh', backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-white opacity-90">संपर्क करें</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-secondary text-lg mb-10">
                Have questions or want to collaborate? We'd love to hear from you. Reach out to us using the contact details below.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6">
                  <div style={{ color: 'var(--primary-color)', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '12px' }}><MapPin size={28} /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Office Address (कार्यालय)</h3>
                    <p className="text-secondary text-lg leading-relaxed">
                      123 Community Center, Bank More<br />
                      Dhanbad, Jharkhand 826001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div style={{ color: 'var(--primary-color)', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '12px' }}><Phone size={28} /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone (फ़ोन)</h3>
                    <p className="text-secondary text-lg leading-relaxed">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div style={{ color: 'var(--primary-color)', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '12px' }}><Mail size={28} /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email (ईमेल)</h3>
                    <p className="text-secondary text-lg leading-relaxed">contact@loharvikashmanch.org</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-10" style={{ backgroundColor: 'var(--bg-color)' }}>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block font-semibold mb-2 text-primary text-lg">Name (नाम)</label>
                  <input type="text" style={{ padding: '1rem', width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '1rem' }} placeholder="Your Name" />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-primary text-lg">Email or Phone (ईमेल/फोन)</label>
                  <input type="text" style={{ padding: '1rem', width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '1rem' }} placeholder="Your Contact Details" />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-primary text-lg">Message (संदेश)</label>
                  <textarea rows="5" style={{ padding: '1rem', width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', resize: 'vertical', fontSize: '1rem' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-4 py-4" style={{ fontSize: '1.1rem' }}>
                  Send Message <Send size={20} className="ml-2" style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
