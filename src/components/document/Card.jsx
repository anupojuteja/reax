// src/components/Card.jsx
export default function Card({ children }) {
    return (
      <div style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
      }}>
        {children}
      </div>
    );
  }
  