import React, { useState, useEffect } from 'react';
import { GoSearch, GoPencil } from 'react-icons/go';
import { IoMdCloseCircleOutline, IoMdTrash } from 'react-icons/io';
import { ModalProvider } from 'styled-react-modal';
import { Link } from 'react-router-dom';

// import Modal from '../../components/Modal';

import {
  Container,
  StyledModal,
  ModalContainer,
  ButtonsDiv,
  Yes,
  No,
  Row,
  FilterDiv,
  UserList,
  ListHeader,
  ListItem,
  User,
  EditBtn,
  DeleteBtn,
  Pagination,
  PageButton,
  AddBtn,
} from './styles';

import api from '../../services/api';

export default function Main({ location, history }) {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [deletedUsers, setDeletedUsers] = useState([]);

  const [filter, setFilter] = useState('');

  console.log(users);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get();

      const newUser = location.state?.user;

      setUsers(newUser ? [...response.data, newUser] : response.data);
    }
    loadUsers();
  }, [location]);

  useEffect(() => {
    const arrayNumbers = [];
    // eslint-disable-next-line no-plusplus
    for (let n = 0; n < Math.ceil(users.length / 5); n++) {
      arrayNumbers.push(n + 1);
    }
    setPagination(arrayNumbers);
  }, [users, deletedUsers]);

  function toggleModal(userId) {
    setOpenModal(!openModal);
    setSelectedUserId(userId);
  }

  const handleDelete = () => {
    const deletedUser = users.filter(u => u.id === selectedUserId)[0];
    // console.log(users.indexOf(deletedUser));
    // console.log(users);
    users.splice(users.indexOf(deletedUser), 1);
    setDeletedUsers(deletedUsers.push(deletedUser));
    setOpenModal(false);
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
            <IoMdCloseCircleOutline
              onClick={() => setOpenModal(false)}
              color="#6619b1"
              size={30}
            />
            <span>
              Permanently <strong>delete</strong> user{' '}
              <strong>{selectedUserId}</strong>?
            </span>
            <Yes onClick={handleDelete}>DELETE</Yes>
            {/*
            <ButtonsDiv>
               <No onClick={() => setOpenModal(false)}>Cancel</No>
            </ButtonsDiv> */}
          </ModalContainer>
        </StyledModal>
      </ModalProvider>
      <FilterDiv>
        <GoSearch size={25} color="#6619b1" />
        <input
          placeholder="Search by [Name] or [Username]"
          onChange={e => setFilter(e.target.value)}
        />
        <AddBtn onClick={() => history.push('/edit')}>Add User</AddBtn>
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
              user.name.toLowerCase().includes(filter.toLowerCase()) ||
              user.username.toLowerCase().includes(filter.toLowerCase()),
          )
          .filter((user, index) => (page - 1) * 5 <= index && index < page * 5)
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
                <EditBtn>
                  <Link
                    to={{
                      pathname: '/edit',
                      state: { userToEdit: user },
                    }}
                  >
                    <GoPencil color="white" />
                  </Link>
                </EditBtn>

                <DeleteBtn onClick={() => toggleModal(user.id)}>
                  <IoMdTrash size={25} color="white" />
                </DeleteBtn>
              </aside>
            </ListItem>
          ))}
      </UserList>
      <Pagination>
        {pagination.map(p => (
          <PageButton
            key={p}
            selected={p === page}
            onClick={() => setPage(p)}
            type="button"
          >
            {p}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
}
