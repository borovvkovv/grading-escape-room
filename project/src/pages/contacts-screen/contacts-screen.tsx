import GeoMap from '../../components/geo-map/geo-map';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { getHeadquarterGeoMapPoint } from '../../utils';

function ContactsScreen(): JSX.Element {
  const headquarterGeoMapPoint = getHeadquarterGeoMapPoint();

  return (
    <>
      <Header currentPage={AppRoute.Contacts} />
      <main className='page-content decorated-page'>
        <div
          className='decorated-page__decor'
          aria-hidden='true'
        >
          <picture>
            <source
              type='image/webp'
              srcSet='img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x'
            />
            <img
              src='img/content/maniac/maniac-bg-size-m.jpg'
              srcSet='img/content/maniac/maniac-bg-size-m@2x.jpg 2x'
              width='1366'
              height='1959'
              alt=''
            />
          </picture>
        </div>
        <div className='container'>
          <div className='page-content__title-wrapper page-content__title-wrapper--underlined'>
            <p className='subtitle page-content__subtitle'>
              квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className='title title--size-m page-content__title'>
              Контакты
            </h1>
          </div>
          <div className='contacts'>
            <dl className='contacts__list'>
              <div className='contacts__item'>
                <dt className='contacts__dt'>Адрес</dt>
                <dd className='contacts__dd'>
                  <address className='contacts__address'>
                    Санкт-Петербург,
                    <br /> {headquarterGeoMapPoint.location.address}
                  </address>
                </dd>
              </div>
              <div className='contacts__item'>
                <dt className='contacts__dt'>Режим работы</dt>
                <dd className='contacts__dd'>
                  Ежедневно, с&nbsp;10:00 до&nbsp;22:00
                </dd>
              </div>
              <div className='contacts__item'>
                <dt className='contacts__dt'>Телефон</dt>
                <dd className='contacts__dd'>
                  <a
                    className='link'
                    href='tel:88003335599'
                  >
                    8 (000) 111-11-11
                  </a>
                </dd>
              </div>
              <div className='contacts__item'>
                <dt className='contacts__dt'>E&ndash;mail</dt>
                <dd className='contacts__dd'>
                  <a
                    className='link'
                    href='mailto:info@escape-room.ru'
                  >
                    info@escape-room.ru
                  </a>
                </dd>
              </div>
            </dl>
            <div className='contacts__map'>
              <div className='map'>
                <div className='map__container'>
                  <GeoMap
                    center={headquarterGeoMapPoint.location.coords}
                    points={[headquarterGeoMapPoint]}
                    selectedPoint={headquarterGeoMapPoint}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactsScreen;
