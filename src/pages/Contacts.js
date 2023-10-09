import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      <ContactList />
    </div>
  );
}
