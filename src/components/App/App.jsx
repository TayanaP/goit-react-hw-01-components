import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json'
import transactions from '../../data/transactions.json'
import { Section } from '../App/App.styled';



export const App = () => {
  return (
    <> 
   <Section>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
   </Section> 

   <Section>
   <Statistics title="Upload stats" stats={data} />
   <Statistics stats={data} />
   </Section> 

   <Section>
   <FriendList friends={friends} />;
   </Section>

   <Section>
   <TransactionHistory items={transactions} />;
   </Section>
  </>
  )
};
