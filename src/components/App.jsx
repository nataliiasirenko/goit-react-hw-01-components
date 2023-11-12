import { Profile } from './Profile/Profile';
import {Statistic} from "./Statistics/Statistics";

import user from '../data/user.json';
import statistic from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
 <>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />


 </>
  );
};