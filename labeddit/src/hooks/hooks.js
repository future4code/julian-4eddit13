import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (initialValues) => {

  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  const resetForm = () => {
    setForm(initialValues);
  }

  return { form, onChange, resetForm }
}

export const usePrivatePage = () => {

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      history.push('/');
    }
  }, [history]);
}

export const useFeedPage = () => {

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      history.push('/home');
    }
  }, [history]);
}

export const useFormatDate = (date) => {

  if (date) {
    const dateString = new Date(date);
    const day = dateString.getDate() > 9 ? `${dateString.getDate()}` : `0${dateString.getDate()}`;
    const month = dateString.getMonth() > 8 ? `${dateString.getMonth() + 1}` : `0${dateString.getMonth() + 1}`;
    const year = `${dateString.getFullYear() - 2000}`;
    const hour = dateString.getHours() > 9 ? `${dateString.getHours()}` : `0${dateString.getHours()}`;
    const minute = dateString.getMinutes() > 9 ? `${dateString.getMinutes()}` : `0${dateString.getMinutes()}`;
    return `${day}/${month}/${year} - ${hour}:${minute}`
  } else {
    return null
  }
}