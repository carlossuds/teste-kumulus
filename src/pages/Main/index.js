import React, { useState, useEffect } from 'react';
import { GoTrashcan, GoSearch, GoPencil } from 'react-icons/go';
import { IoMdCloseCircleOutline, IoIosTrash, IoMdTrash } from 'react-icons/io';
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
import usersJson from '../../assets/users.json';

export default function Main() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deletedUsers, setDeletedUsers] = useState([]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadUsers() {
      /* const response = await api.get();
      setUsers(response.data); */

      setUsers(usersJson);

      const arrayNumbers = [];
      // for (let n = 0; n < Math.ceil(response.data.length / 5); n++) {
      // eslint-disable-next-line no-plusplus
      for (let n = 0; n < Math.ceil(usersJson.length / 5); n++) {
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
            <IoMdCloseCircleOutline
              onClick={() => setOpenModal(false)}
              color="#6619b1"
              size={30}
            />
            <span>
              Permanently <strong>delete</strong> user{' '}
              <strong>{selectedUser}</strong>?
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

        <AddBtn>
          <Link to="/edit">Add User</Link>
        </AddBtn>
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
                <EditBtn>
                  <Link to={{ pathname: '/edit', state: { userToEdit: user } }}>
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
