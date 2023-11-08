import { useSnackbar } from 'notistack';
import React from 'react';
import { Form, redirect, useNavigate, useActionData, useNavigation } from 'react-router-dom';
import { loginUser } from '../utils/api';

export async function action({ params, request }) {
  try {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');
    const userEmail = await loginUser({ email, password });
    // console.log(data);
    // const res = redirect(`/vans?username=${name}`);
    localStorage.setItem('loggedin', JSON.stringify(true));
    const pathname = new URL(request.url).searchParams.get('redirect') || '/host';
    const res = redirect(`${pathname}?username=${userEmail}`);
    // res.body = true;
    return res;
  } catch (error) {
    return error;
  }
}

const LoginForm = ({}) => {
  const [loginFormData, setLoginFormData] = React.useState({ email: 'foo@foo.com', password: 'foo@bar' });
  const { enqueueSnackbar } = useSnackbar();
  // const [status, setStatus] = React.useState('idle');
  const navigate = useNavigate();
  const error = useActionData();
  const navigation = useNavigation();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('submitting');
  //   try {
  //     const {
  //       user: { name },
  //     } = await loginUser(loginFormData);
  //     // navigate('/vans', { state: name, replace: true });
  //   } catch (err) {
  //     enqueueSnackbar(`wrong credentials : ${err.message}`, { variant: 'error', autoHideDuration: 3000 });
  //     throw Error('err');
  //   } finally {
  //     setStatus('idle');
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  React.useEffect(() => {
    if (!error) return;
    console.log(error);
    enqueueSnackbar(`wrong credentials : ${error.message}`, { variant: 'error', autoHideDuration: 3000 });
  }, [error]);

  return (
    <Form
      method="POST"
      //  onSubmit={handleSubmit}
      className="login-form"
      replace
    >
      <input
        // onChange={handleChange}
        // value={loginFormData.email}
        defaultValue="b@b.com"
        name="email"
        placeholder="Email address"
      />
      <input
        // onChange={handleChange}
        // value={loginFormData.password}
        defaultValue="1&%SSc*SYCS*"
        type="password"
        name="password"
        placeholder="password"
      />
      <button type="submit" disabled={navigation.state === 'submitting'}>
        {navigation.state === 'submitting' ? 'Logging In...' : 'Log In'}
      </button>
    </Form>
  );
};

export default LoginForm;
