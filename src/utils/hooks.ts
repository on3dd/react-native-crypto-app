import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useFetching = (someFetchActionCreator: () => void) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(someFetchActionCreator());
  }, []);
};

export const useFetchingWithArgs = (
  someFetchActionCreator: (...args: any[]) => void,
  ...args: any[]
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(someFetchActionCreator(...args));
  }, []);
};

export const useFetchingWithConditionAndArgs = (
  someFetchActionCreator: (...args: any[]) => void,
  condition: boolean,
  ...args: any[]
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (condition) dispatch(someFetchActionCreator(...args));
  }, []);
};
