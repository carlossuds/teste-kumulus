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
    <>
      <svg
        style={{ marginBottom: '-2%' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6619b1"
          fillOpacity="1"
          d="M0,256L120,234.7C240,213,480,171,720,176C960,181,1200,235,1320,261.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          data-darkreader-inline-fill=""
        />
      </svg>
      <Container>
        <img
          height={200}
          src={require('../../assets/developer.svg')}
          alt="Developer"
        />

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
                <MdLocationOn size={20} color="#f2f2f2" /> Rua Professor Mário
                de Casto, 382 <br /> Recife - PE
              </span>
            </div>
          </Column>
        </Content>
      </Container>
    </>
  );
}
