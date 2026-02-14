import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function Estabelecimentos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/estabelecimentos').then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h1>Estabelecimentos</h1>
      <ul>
        {items.map(e => (
          <li key={e.id}>{e.nome_fantasia}</li>
        ))}
      </ul>
    </div>
  );
}
