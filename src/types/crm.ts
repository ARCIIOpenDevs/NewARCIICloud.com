// Re-export existing types from the main types file
export type { 
  Client, 
  Service,
  CreateServiceForm
} from './index';

import type { Client, CreateServiceForm } from './index';

// Create the form types manually since they're not directly exported
export type CreateClientForm = Omit<Client, 'clientId' | 'createdAt' | 'updatedAt' | 'createdBy' | 'metrics'> & Partial<Pick<Client, 'metrics'>>;
export type UpdateClientForm = Partial<CreateClientForm>;
export type UpdateServiceForm = Partial<CreateServiceForm>;

// Form aliases for compatibility  
export type ClientFormData = CreateClientForm;
export type ServiceFormData = CreateServiceForm;