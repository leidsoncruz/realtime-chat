'use client';

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

import styles from './login.module.css';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
}
interface FormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Home() {
  const handleSubmit = (event: FormEvent<FormElement>) => {
    event.preventDefault();
    signIn('credentials', {
      username: event.currentTarget.elements.name.value,
    });
  };

  return (
    <main className={styles.main}>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          placeholder='Username'
          type='text'
          required={true}
          name='name'
          id='name'
          autoComplete='off'
        />
        <button type='submit'>Entrar</button>
      </form>
    </main>
  );
}
