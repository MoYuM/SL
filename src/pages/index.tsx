import styles from './index.less';
import octokit from '@/api';

export default function IndexPage() {
  console.log(
    'data',
    octokit.issues.list({
      filter: 'created',
    }),
  );
  return (
    <div>
      <h1>Hello,World</h1>
    </div>
  );
}
