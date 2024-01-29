import Dashboard from '../components/Dashboard';
import { currentUser } from '@clerk/nextjs';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export default async function Page() {
  const jobs = await xata.db.jobs.getAll();
  const user = await currentUser();
  const username = user?.username;
  const imageUrl = user?.imageUrl;

  return (
    <Dashboard
      jobs={JSON.stringify(jobs)}
      username={username}
      imageUrl={imageUrl}
    />
  );
}
