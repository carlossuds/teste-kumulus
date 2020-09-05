import React, { useState, useEffect } from 'react';
import { GoTrashcan, GoSearch } from 'react-icons/go';
import { ModalProvider } from 'styled-react-modal';

// import Modal from '../../components/Modal';

import {
  Container,
  StyledModal,
  ModalContainer,
  ButtonsDiv,
  Yes,
  No,
  FilterDiv,
  UserList,
  ListHeader,
  ListItem,
  User,
  DeleteBtn,
  Pagination,
  Button,
} from './styles';

import api from '../../services/api';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deletedUsers, setDeletedUsers] = useState([]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get();
      setUsers(response.data);

      const arrayNumbers = [];
      for (let n = 0; n < Math.ceil(response.data.length / 5); n++) {
        arrayNumbers.push(n + 1);
      }
      setPagination(arrayNumbers);
    }
    loadUsers();
  }, []);

  function toggleModal(userId) {
    setOpenModal(!openModal);
    setSelectedUser(userId);
  }

  const handleDelete = () => {
    setDeletedUsers(deletedUsers.push(selectedUser));
  };

  return (
    <Container>
      {/* <Modal open={openModal} setOpenModal={setOpenModal} */}
      <ModalProvider>
        <StyledModal
          isOpen={openModal}
          onBackgroundClick={() => setOpenModal(false)}
          onEscapeKeydown={() => setOpenModal(false)}
        >
          <ModalContainer>
            <span>
              Permanently <strong>delete</strong> user{' '}
              <strong>{selectedUser}</strong>?
            </span>
            <ButtonsDiv>
              <Yes onClick={handleDelete}>DELETE</Yes>
              <No onClick={() => setOpenModal(false)}>Cancel</No>
            </ButtonsDiv>
          </ModalContainer>
        </StyledModal>
      </ModalProvider>

      <FilterDiv>
        <GoSearch size={20} color="#6619b1" />
        <input
          placeholder="Search by [Name] or [Username]"
          onChange={e => setFilter(e.target.value)}
        />
      </FilterDiv>

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
        {users
          .filter(
            user =>
              filter === null ||
              user.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .filter(user => (page - 1) * 5 < user.id && user.id < page * 5 + 1)
          .map((user, index) => (
            <ListItem key={user.id}>
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
              <aside>
                <DeleteBtn onClick={() => toggleModal(user.id)}>
                  <GoTrashcan size={20} color="#6619b1" />
                </DeleteBtn>
              </aside>
            </ListItem>
          ))}
      </UserList>
      <Pagination>
        {pagination.map(p => (
          <Button
            selected={p === page}
            onClick={() => setPage(p)}
            type="button"
          >
            {p}
          </Button>
        ))}
      </Pagination>
    </Container>
  );
}
