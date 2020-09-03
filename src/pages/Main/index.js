import React, { useState, useEffect } from 'react';
import { GoTrashcan } from 'react-icons/go';
import api from '../../services/api';

import {
  Container,
  UserList,
  ListHeader,
  Row,
  User,
  DeleteBtn,
} from './styles';

export default function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get();
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  return (
    <Container>
      <UserList>
        <ListHeader>
          <strong>Name</strong>
          <strong>Username</strong>
          <strong>Email</strong>
          <strong>Address</strong>
          <strong>Phone</strong>
          <strong>Website</strong>
          <strong>Company</strong>
        </ListHeader>
        {users.map((user, index) => (
          <>
            <User index={index}>
              <span>{user.name}</span>
              <span>{user.username}</span>
              <span>{user.email}</span>
              <span>
                {user.address.street}, {user.address.city}
                <br />
                {user.address.suite} - {user.address.zipcode}
                <br />
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </span>
              <span>{user.phone}</span>
              <span>
                <a href={user.company.website}>{user.website}</a>
              </span>
              <span>
                {user.company.name}
                <br />
              </span>
            </User>
            <DeleteBtn>
              <GoTrashcan size={20} />
            </DeleteBtn>
          </>
        ))}
      </UserList>
    </Container>
  );
}
