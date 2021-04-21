import React from 'react';

export default function PlayerEmbed() {
  return (
    <div>
      <iframe
        src="https://radio-player-5a684.web.app/"
        title="Radio Player"
        style={{ height: '510px', width: '350px', border: 'none' }}
      />
    </div>
  );
}

// https://blog.bitsrc.io/best-practices-in-using-iframes-with-react-6193feaa1e08
