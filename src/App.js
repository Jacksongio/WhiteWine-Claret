import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';

function App() {
  const [items, setItems] = useState([]);

  // TODO: replace with real data source or CMS
  useEffect(() => {
    setItems([
      { id: 1, title: 'Handmade Clay Pot', image: '/images/clay-pot.jpg' },
      { id: 2, title: 'Knitted Scarf',     image: '/images/scarf.jpg'     }
    ]);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Mom’s Crafts Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
        {items.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '0.5rem' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <hr style={{ margin: '2rem 0' }} />
      <ContactForm />
    </div>
  );
}

export default App;
