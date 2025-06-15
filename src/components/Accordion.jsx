import { useState } from 'react';

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '0.75rem',
          textAlign: 'left',
          backgroundColor: '#f0f0f0',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {title}
      </button>
      {open && (
        <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
