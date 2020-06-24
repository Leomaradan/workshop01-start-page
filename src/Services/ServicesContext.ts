import { createContext, useContext } from 'react';
import { Service, emptyService } from './Service';

const ServiceContext = createContext<Service>(emptyService);

export const ServiceProvider = ServiceContext.Provider;
export const ServiceConsumer = ServiceContext.Consumer;

export const useService = () => useContext(ServiceContext);

export default ServiceContext;
