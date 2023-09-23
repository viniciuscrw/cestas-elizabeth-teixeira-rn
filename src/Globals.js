export default {
  APP: {
    NAME: 'Cestas Elizabeth Teixeira',
    INITIALSCREEN_TEXT:
      'O coletivo de produtoras Elizabeth Teixeira é um coletivo que produz e comercializa produtos agroecológicos em Campinas-SP e Limeira-SP.',
  },
  CONSUMER_GROUP: {
    ID: '76PokqiJ8j87PDFBmWpN',
    NAME: 'Campinas',
  },
  USER: {
    ATTRIBUTE: {
      ROLE: 'role',
      EMAIL: 'email',
      AUTH_ID: 'authId',
      BALANCE: 'balance',
      CHECKBALANCE: 'checkBalance',
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
      CANCELED: 'canceled',
    },
    ATTRIBUTE: {
      PAYMENT_ID: 'paymentId',
      PAYMENT_STATUS: 'paymentStatus',
    },
  },
  PAYMENT: {
    STATUS: {
      OPENED: 'opened',
      COMPLETED: 'completed',
    },
  },
  RECEIPTFILE: {
    SIZE: 2000000,
  },
};
