import './car.scss';
import { useGetCarById } from '../../hooks/queries/car/useGetCarById';

const Car = () => {
  const {data, loading} = useGetCarById()

  return (
    <main className={'main car'}>
      {loading ? "Loading..." : (
        <div className="main__header-info header-info">
          <div className={'header-info__box box'}>
            <img src={`${VITE_SERVER_URL}${data?.car?.img_src}`} alt="" />
          </div>
          <div className="header-info__box box">
            <h1 className={'box__title'}>
              {data?.car?.brand} {data?.car?.model}
            </h1>
            <p className={'box__description'}>
              {data?.car?.description}
            </p>
            <blockquote>Что-то там ещё...</blockquote>
          </div>
        </div>
      )}
    </main>
  );
};

export default Car;