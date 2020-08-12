import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useFetching = (someFetchActionCreator: () => void) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(someFetchActionCreator());
  }, []);
};
