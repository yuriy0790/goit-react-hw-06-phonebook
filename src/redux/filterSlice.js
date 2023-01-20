import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
    filterContacts(state, action) {},
  },
});

// Генератори екшенів
const { filterContacts } = filterSlice.actions;
// Редюсер слайсу
const filterReducer = filterSlice.reducer;
