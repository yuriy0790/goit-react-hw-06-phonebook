import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { name: 'Vasia', number: '5556677', id: '5556677' },
];

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(el => el.id !== payload);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
