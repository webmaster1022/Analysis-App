export interface transactionResponse1 {
  message: string;
  data: {
    id: number;
    currency: string;
    amount: number;
    category: string;
    createdAt: string;
    date: string;
    note: string;
    publishedAt: string;
    updatedAt: string;
    wallet: string;
    transaction_type: string;
  };
}

export interface transactionResponse {
  all: {
    id: number;
    currency: string;
    amount: number;
    category: string;
    createdAt: string;
    date: string;
    note: string;
    publishedAt: string;
    updatedAt: string;
    wallet: string;
    transaction_type: string;
  }[];
  income: {
    id: number;
    currency: string;
    amount: number;
    category: string;
    createdAt: string;
    date: string;
    note: string;
    publishedAt: string;
    updatedAt: string;
    wallet: string;
    transaction_type: string;
  }[];
  debt_loan: {
    id: number;
    currency: string;
    amount: number;
    category: string;
    createdAt: string;
    date: string;
    note: string;
    publishedAt: string;
    updatedAt: string;
    wallet: string;
    transaction_type: string;
  }[];
  expense: {
    id: number;
    currency: string;
    amount: number;
    category: string;
    createdAt: string;
    date: string;
    note: string;
    publishedAt: string;
    updatedAt: string;
    wallet: string;
    transaction_type: string;
  }[];
}

export interface Wallet {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  transactions?: {}[];
}

export interface TransactionType {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    categories: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          publishedAt: string;
          updatedAt: string;
        };
      }[];
    };
  };
}

export interface Wallet {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  transactions?: {}[];
}
