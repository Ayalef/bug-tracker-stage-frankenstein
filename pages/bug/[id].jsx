import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function BugDetails() {
  const [bug, setBug] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/bugs/${id}`);
      setBug(result.data);
    };
    fetchData();
  }, [id]);

  if (!bug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{bugs.name}</h1>
      <p>{bugs.description}</p>
    </div>
  );
}

export default BugDetails;