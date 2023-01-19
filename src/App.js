import './categories.styles.scss'
import Directory from './components/directory/directory.component';

const App=() => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80s',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1615332859295-aa9dc9f01fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1514913274516-4aa04f176f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80',
    },
  ]
  return (
   <Directory categories={categories}/>
  );
}

export default App;
