import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const EventCard = ({ title, date, location, description, imageUrl, platform, externalLink }) => {
  return (
    <div className="card flex flex-col">
      {imageUrl && (
        <div style={{ overflow: 'hidden', height: '240px' }}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}
      <div className="py-6 px-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold leading-tight" style={{ flex: '1', paddingRight: '1rem' }}>{title}</h3>
          <span className={`text-sm font-bold px-3 py-1 rounded-full ${platform}`} style={{ fontSize: '0.75rem', textTransform: 'capitalize', backgroundColor: 'rgba(0,0,0,0.05)' }}>
            {platform}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
          <div className="flex items-center gap-2">
            <Calendar size={18} style={{ color: 'var(--primary-color)' }} />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} style={{ color: 'var(--primary-color)' }} />
            <span className="font-medium">{location}</span>
          </div>
        </div>
        <p className="mb-6 flex-grow text-secondary" style={{ lineHeight: '1.6' }}>{description}</p>
        <a href={externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          <span>View on {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
