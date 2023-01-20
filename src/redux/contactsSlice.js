import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

// Генератори екшенів
const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
const contactsReducer = contactsSlice.reducer;
