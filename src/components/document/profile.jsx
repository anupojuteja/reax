// src/components/Profile.jsx
import Avatar from './Avatar';
import Card from './Card';
import { GregorioTodoList, HedyTodoList } from './Blog';

function Profile() {
  return (
    <>
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
      <HedyTodoList />
      <GregorioTodoList />
    </>
  );
}

export { Profile };
