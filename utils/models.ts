import { Moment } from "moment";

export interface transactionResponse1 {
  message: string;
  data: {
    id?: number;
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
    users_id: number;
  };
}

export interface transactionResponse {
  all?: {
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

export interface transactionQueries {
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  user: number;
  starter: number;
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
  name: string;
  createdAt: string;
  updatedAt: string;
  categories?: {
    id: number;
    name: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
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

export interface AnalyticsResponse {
  data: {
    transactionsTypesTotal: {
      income: number;
      "debt/loan": number;
      expense: number;
      total_transactions: number;
    };
    transactionsAnalytics: {
      date: string;
      expense: number;
      "debt/loan": number;
      income: number;
    }[];
    walletsAnalytics: {
      bank: number;
      crypto: number;
      momo: number;
    };
    expensesAnalytics: {
      name: string;
      amount: number;
      percentage: number;
    }[];
  };
}

export interface analyticsQueries {
  dateFrom: string;
  dateTo: string;
  type: "time" | "date" | "month" | "year" | "week" | "quarter" | undefined;
  user: number;
}

export interface categoriesResponse {
  data: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    budget: number | null;
    transaction_type: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
}

export interface categoriesResponse1 {
  message: string;
  data: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    budget: number | null;
    usedBudget?: number;
    usedBudgetPercentage?: number;
    usedBudgetColor?: string;
    transaction_type: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface categoriesBody {
  id?: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  budget: number | null;
  transaction_type: number;
  users_permissions_user: number;
}

export interface categoriesQueries {
  user: number;
  dateFrom?: string;
  dateTo?: string;
}
[];

export interface signup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface login {
  email: string;
  password: string;
}

export interface refreshResponse {
  message: string;
  token: string;
}
