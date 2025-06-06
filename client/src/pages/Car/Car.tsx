import './car.scss';
import { useParams } from 'react-router';
import { useGetCarById } from '../../hooks/queries/car/useGetCarById';

const Car = () => {
  const params = useParams<{ id: string }>()
  const {data, loading} = useGetCarById()

  return (
    <main className={'main'}>
      <div className={'main__header'}>
        <h2></h2>
      </div>
      Машинка под номером {params.id}
    </main>
  );
};

export default Car;