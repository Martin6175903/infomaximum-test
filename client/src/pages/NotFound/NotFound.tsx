import './not-found.scss';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <main className={'not-found'}>
      <h1 className={'not-found__title'}>Страница не найдена!</h1>
      <p className={'not-found__text'}>Ошибка 404!</p>
      <Link className={'not-found__link'} to={'/'}>Вернуться на главную страницу</Link>
    </main>
  );
};

export default NotFound;