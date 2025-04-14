// src/components/Avatar.jsx
import { getImageUrl } from './prop';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      style={{
        width: size + 'px',
        borderRadius: '50%',
        marginBottom: '10px'
      }}
    />
  );
}
