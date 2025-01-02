```javascript
// pages/mypage.js
import MyComponent from '@/components/MyComponent';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function MyPage({ session }) {
  return (
    <div>
      {session && <p>Logged in as {session.user.email}</p>}
      <MyComponent session={session} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  return {
    props: {
      session
    }
  };
}
```
```javascript
// components/MyComponent.js
function MyComponent({ session }) {
  return (
    <div>
      {session && (
        <>
          <h2>My Component</h2>
          <p>Session Data: {JSON.stringify(session, null, 2)}</p>
        </ />
      )}
      {!session && <p>Please log in</p>}
    </div>
  );
}

export default MyComponent;
```