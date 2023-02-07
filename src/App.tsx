import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/mansufa.png',
      name: 'Fellipe Pinho',
      role: 'Dev Front-end'
    },
    content: [
      {type: 'paragraph', content:'Esse é um post para marcar mais um comentário do portifólio.', },
      {type: 'paragraph', content:'É um projeto em React.',}
    ],
    publishedAt: new Date('2023-01-02 21:03'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/AugustodeSouzaVilarinho.png',
      name: 'Rich Formula',
      role: 'Estudante'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-02 21:03'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post=> {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}
