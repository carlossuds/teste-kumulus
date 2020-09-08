import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { TiArrowBack } from 'react-icons/ti';
import Input from '../../components/Input';
import {
  Container,
  FormDiv,
  SectionArea,
  Row,
  Section,
  InputDiv,
} from './styles';

export default function Edit({ location, history }) {
  const formRef = useRef(null);
  const [user, setUser] = useState(location.state?.userToEdit || null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string()
          .email('Email must be valid')
          .required('Email is required'),
        phone: Yup.string('Phone must be a number').required(
          'Phone is required',
        ),
        website: Yup.string()
          .url('Website must be valid')
          .required('Website is required'),
        address: Yup.object().shape({
          street: Yup.string().required('Street is required'),
          suite: Yup.string().required('Suite is required'),
          city: Yup.string().required('City is required'),
          zipcode: Yup.string().required('Zipcode is required'),
          geo: Yup.object().shape({
            lat: Yup.string().required('Latitude is required'),
            lng: Yup.string().required('Longitude is required'),
          }),
        }),
        company: Yup.object().shape({
          name: Yup.string().required('Company Name is required'),
          catchPhrase: Yup.string().required('Catchphrase is required'),
          bs: Yup.string().required('BS is required'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newUser = {
        id: user ? user.id : Math.floor(Math.random() * 100 + 10),
        ...data,
      };

      console.log(newUser);

      history.push({ pathname: '/', state: { user: newUser } });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
        console.log(err);
        err.errors.map(error => toast.error(error));
      }
      console.log(err);
    }
  }

  return (
    <Container>
      <TiArrowBack onClick={() => history.goBack()} size={50} color="#6619b1" />
      <h1>Add new user</h1>

      <FormDiv ref={formRef} initialData={user} onSubmit={handleSubmit}>
        <SectionArea>
          <Section columns={3}>
            <InputDiv>
              <strong>Name</strong>
              <Input name="name" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Username</strong>
              <Input name="username" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Email</strong>
              <Input name="email" type="email" />
            </InputDiv>
          </Section>

          <Section columns={2}>
            <InputDiv>
              <strong>Phone</strong>
              <Input name="phone" type="number" />
            </InputDiv>
            <InputDiv>
              <strong>Website</strong>
              <Input name="website" type="url" />
            </InputDiv>
            <InputDiv />
          </Section>
        </SectionArea>
        <SectionArea tintBg>
          <Section columns={3}>
            <InputDiv>
              <strong>Street</strong>
              <Input tintBg name="address.street" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Suite</strong>
              <Input tintBg name="address.suite" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>City</strong>
              <Input tintBg name="address.city" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Zipcode</strong>
              <Input tintBg name="address.zipcode" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Latitude</strong>
              <Input tintBg name="address.geo.lat" type="number" />
            </InputDiv>
            <InputDiv>
              <strong>Longitude</strong>
              <Input tintBg name="address.geo.lng" type="number" />
            </InputDiv>
          </Section>
        </SectionArea>
        <SectionArea>
          <Section columns={3}>
            <InputDiv>
              <strong>Company name</strong>
              <Input name="company.name" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>Catchphrase</strong>
              <Input name="company.catchPhrase" type="text" />
            </InputDiv>
            <InputDiv>
              <strong>BS</strong>
              <Input name="company.bs" type="text" />
            </InputDiv>
          </Section>
        </SectionArea>

        <button type="submit">
          <strong>SEND</strong>
        </button>
      </FormDiv>
    </Container>
  );
}
