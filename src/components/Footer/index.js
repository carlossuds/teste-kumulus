import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdPhoneIphone,
  MdMail,
  MdLocationOn,
  MdHome,
  MdPersonAdd,
} from 'react-icons/md';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { Container, Content, Column } from './styles';

export default function Footer() {
  return (
    <Container>
      <a href="https://kumulus.com.br/">
        <img
          height={40}
          src={require('../../assets/kumulus.png')}
          alt="Kumulus"
        />
      </a>

      <Content>
        <Column>
          <strong>PAGES</strong>
          <div>
            <Link to="/">
              <span>
                <MdHome size={20} color="#f2f2f2" /> Home
              </span>
            </Link>
            <Link to="/edit">
              <span>
                <MdPersonAdd size={20} color="#f2f2f2" /> Add User
              </span>
            </Link>
          </div>
        </Column>
        <Column>
          <strong>CONTACT</strong>
          <div>
            <span>
              <MdPhoneIphone size={20} color="#f2f2f2" /> (81) 995614336
            </span>
            <span>
              <MdMail size={20} color="#f2f2f2" /> sudsilowsky@gmail.com
            </span>
            <span>
              <a
                style={{ marginTop: 0 }}
                href="https://www.linkedin.com/in/suds/"
              >
                <FaLinkedin size={20} color="#f2f2f2" />
              </a>
              <a
                style={{ marginTop: 0, marginLeft: 20 }}
                href="https://github.com/carlossuds/"
              >
                <FaGithub size={20} color="#f2f2f2" />
              </a>
              <a
                style={{ marginTop: 0, marginLeft: 20 }}
                href="https://stackoverflow.com/users/5976028"
              >
                <FaStackOverflow size={20} color="#f2f2f2" />
              </a>
            </span>
          </div>
        </Column>
        <Column>
          <strong>ADDRESS</strong>
          <div>
            <span>
              <MdLocationOn size={20} color="#f2f2f2" /> Rua Professor Mário de
              Casto, 382 <br /> Recife - PE
            </span>
          </div>
        </Column>
      </Content>
    </Container>
  );
}
