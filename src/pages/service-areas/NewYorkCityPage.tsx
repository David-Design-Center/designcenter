import ServiceAreaPage from './ServiceAreaPage';
import { newYorkCityConfig } from '../../data/service-areas/new-york-city';

function NewYorkCityPage() {
  return <ServiceAreaPage config={newYorkCityConfig} />;
}

export default NewYorkCityPage;
