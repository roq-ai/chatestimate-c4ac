interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'ChatEstimate',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage company information', 'Manage user information', 'Manage pdf files', 'Manage chat messages'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5dbfbcce-9a7c-4baa-8497-8da01b531dc7',
};
