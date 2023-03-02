import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function BugsList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/bugs');
      setBugs(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="ml-8 space-y-4">
        {bugs.slice(0, 8).map((bug) => (
          <li key={bugs.id}>
            <Link href="/bug/[id]" as={`/bug/${bug.id}`}>
              <span className="block font-sans text-xl text-white mb-8 bg-[#907FA4] hover:bg-[#BFA2DB] rounded px-3 py-2">
                {bug.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugsList;