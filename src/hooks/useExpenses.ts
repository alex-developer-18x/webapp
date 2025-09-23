import { useEffect, useState } from 'react';
import { getExpenses } from '../services/expense-service';
import type { Expense } from '../model/Expense';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    getExpenses()
      .then((response) => setExpenses(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoader(false));
  }, []);

  return { expenses, error, isLoading };
};
