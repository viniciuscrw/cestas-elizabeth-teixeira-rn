export default {
  APP: {
    NAME: 'Cestas Cooperflora',
  },
  CONSUMER_GROUP: {
    ID: 'vhvp5xf4PNESoy0qR2Yx',
    NAME: 'Barão Geraldo',
  },
  USER: {
    ATTRIBUTE: {
      ROLE: 'role',
      EMAIL: 'email',
      AUTH_ID: 'authId',
      BALANCE: 'balance',
    },
    ROLE: {
      CONSUMER: 'consumer',
      ORGANIZER: 'organizer',
    },
  },
  COLLECTION: {
    GROUPS: 'groups',
    USERS: 'users',
    DELIVERIES: 'deliveries',
    PRODUCTS: 'products',
    ORDERS: 'orders',
  },
  SUB_COLLECTION: {
    PAYMENTS: 'payments',
  },
  FORMAT: {
    DEFAULT_DATE: 'dd/MM/yyyy',
    DEFAULT_TIME: 'HH:mm',
    DEFAULT_DATE_TIME: 'dd/MM/yyyy HH:mm',
    DD_MM: 'dd/MM',
  },
  ORDER: {
    STATUS: {
      OPENED: 'opened',
      COMPLETED: 'completed',
    },
  },
  PAYMENT: {
    STATUS: {
      OPENED: 'opened',
      COMPLETED: 'completed',
    },
  },
};
