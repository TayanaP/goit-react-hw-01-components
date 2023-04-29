import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from '../../data/user.json';
import data from '../../data/data.json';
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

   <Statistics title="Upload stats" stats={data} />
   <Statistics stats={data} />
  </>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
