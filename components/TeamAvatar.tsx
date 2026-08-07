import React from 'react';

interface TeamAvatarProps {
  role: string;
}

export default function TeamAvatar({ role }: TeamAvatarProps) {
  const svgStyle = {
    width: '50%',
    height: '50%',
    display: 'block',
    color: 'var(--accent)',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '50%',
    border: '2px dashed var(--navbar-border)',
    transition: 'var(--transition-smooth)',
  };

  if (role.includes('Chief')) {
    // CEO Avatar: Profile with blazer/tie checkmark
    return (
      <div style={containerStyle} className="avatar-container">
        <svg viewBox="0 0 24 24" style={svgStyle} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M22 11l-3 3-1.5-1.5" />
        </svg>
      </div>
    );
  } else if (role.includes('Product')) {
    // R&D: Profile with beaker/flask
    return (
      <div style={containerStyle} className="avatar-container">
        <svg viewBox="0 0 24 24" style={svgStyle} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M18 10h4" />
          <path d="M20 7v6" />
          <path d="M20 14h.01" />
        </svg>
      </div>
    );
  } else if (role.includes('IT')) {
    // IT: Profile with terminal braces
    return (
      <div style={containerStyle} className="avatar-container">
        <svg viewBox="0 0 24 24" style={svgStyle} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="15 14 13 12 15 10" />
          <polyline points="17 10 19 12 17 14" />
        </svg>
      </div>
    );
  } else {
    // Lead Systems Engineer: Profile with wrench/gear
    return (
      <div style={containerStyle} className="avatar-container">
        <svg viewBox="0 0 24 24" style={svgStyle} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77" />
        </svg>
      </div>
    );
  }
}
