'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useStore } from '@/src/stores/product-store'
import { Character } from '@/src/interfaces';

const CreateProduct = () => {
  const initState = {
    name: '',
    status: '',
    gender: '',
    species: '',
  }

  const [formData, setFormData] = useState(initState);

  const { addProduct } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Date.now();
    const fullData = Object.assign(formData, { id }, { image: '/next.svg' })

    addProduct(fullData as Character)
    setFormData(initState)
  };

  return (
    <section>
      <Link href={'/'} className='inline-block p-10 pb-0 mb-10 text-xl'> ← Back to home</Link>
      <div className='container mx-auto py-10'>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 w-1/2 mb-5">
            <input
              type="text"
              className="border p-2"
              placeholder='Enter name'
              name="name"
              required
              minLength={4}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              placeholder='Enter status'
              type="text"
              name="status"
              required
              minLength={4}
              value={formData.status}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              placeholder='Enter gender'
              type="text"
              name="gender"
              required
              minLength={4}
              value={formData.gender}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              placeholder='Enter species'
              type="text"
              name="species"
              required
              minLength={4}
              value={formData.species}
              onChange={handleChange}
            />
          </div>
          <button
            className="p-5 bg-blue-600 text-white rounded-md w-[120px] cursor-pointer"
            type='submit'
          >
            Add
          </button>
        </form>
      </div>
      <Link href={'/products'} className='inline-block p-10 pb-0 mb-10 text-xl'> ← Back to characters</Link>
    </section>
  );
}

export default CreateProduct