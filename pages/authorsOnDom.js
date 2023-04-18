/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';

export default function AuthorsOnDom() {
  const [authors, setAuthor] = useState([]);
  const { user } = useAuth();

  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthor);
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/author/new" passHref>
          <Button>Add A Author</Button>
        </Link>
        <div className="d-flex flex-wrap">
          {authors.map((author) => (
            <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
          ))}
        </div>

      </div>
    </>
  );
}
