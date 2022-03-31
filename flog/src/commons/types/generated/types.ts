export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  content: Scalars['String'];
  day: Scalars['String'];
  id: Scalars['String'];
  schedule: ISchedule;
};

export type IBudget = {
  __typename?: 'Budget';
  amount: Scalars['Int'];
  id: Scalars['String'];
  mainCategory: IMainCategory;
  totalAmount: Scalars['Int'];
};

export type ICreateBoardInput = {
  content: Scalars['String'];
  day: Scalars['String'];
};

export type ICreateDetailScheduleInput = {
  date: Scalars['String'];
  day: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
  place: Scalars['String'];
  startTime: Scalars['String'];
  useTime: Scalars['String'];
};

export type ICreateMoneyBookInput = {
  context: Scalars['String'];
  date: Scalars['String'];
  memo: Scalars['String'];
  status: ISpending_Category_Status_Enum;
  time: Scalars['String'];
  tripdates: Scalars['String'];
};

export type ICreateScheduleInput = {
  endDate: Scalars['String'];
  hashtag: IHashtag;
  location: Scalars['String'];
  mainCategoryId: Scalars['String'];
  numberPeople?: InputMaybe<INumber_People_Enum>;
  startDate: Scalars['String'];
  title: Scalars['String'];
  tripdates: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  mainCategoryId: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
};

export type IDetailSchedule = {
  __typename?: 'DetailSchedule';
  date: Scalars['String'];
  day: Scalars['String'];
  id: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  place: Scalars['String'];
  schedule: ISchedule;
  startTime: Scalars['String'];
  useTime: Scalars['String'];
};

export enum IHashtag {
  Alone = 'ALONE',
  Couple = 'COUPLE',
  Family = 'FAMILY',
  Friend = 'FRIEND',
  Pet = 'PET'
}

export enum IMaincategory_Enum {
  Mine = 'MINE',
  Mypage = 'MYPAGE',
  Our = 'OUR'
}

export type IMainCategory = {
  __typename?: 'MainCategory';
  id: Scalars['String'];
  name: IMaincategory_Enum;
};

export type IMoneyBook = {
  __typename?: 'MoneyBook';
  amount: Scalars['Int'];
  context: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['String'];
  memo: Scalars['String'];
  status: ISpending_Category_Status_Enum;
  time: Scalars['String'];
  tripdates: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelPointTransaction: IPointTransaction;
  createBoard: IBoard;
  createBudget: IBudget;
  createDetailSchedule: IDetailSchedule;
  createMoneyBook: IMoneyBook;
  createPointTransaction: IPointTransaction;
  createSchedule: ISchedule;
  createUser: IUser;
  deleteBannerImagefile: Scalars['String'];
  deleteBoard: Scalars['Boolean'];
  deleteBoardImagefile: Scalars['String'];
  deleteDetailSchedule: Scalars['Boolean'];
  deleteProfileImagefile: Scalars['String'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  paymentPointTransaction: IPointTransaction;
  restoreAccessToken: Scalars['String'];
  share: ISchedule;
  unshare: ISchedule;
  updateBannerImage: ISchedule;
  updateBoard: IBoard;
  updateBudget: IBudget;
  updateDetailSchedule: IDetailSchedule;
  updateMoneyBook: IMoneyBook;
  updateUser: IUser;
  uploadBannerImagefile: Scalars['String'];
  uploadBoardImagefile: Scalars['String'];
  uploadProfileImagefile: Scalars['String'];
};


export type IMutationCancelPointTransactionArgs = {
  impUid: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
  scheduleId: Scalars['String'];
};


export type IMutationCreateBudgetArgs = {
  scheduleId: Scalars['String'];
  totalAmount: Scalars['Float'];
};


export type IMutationCreateDetailScheduleArgs = {
  createDetailScheduleInput: ICreateDetailScheduleInput;
  scheduleId: Scalars['String'];
};


export type IMutationCreateMoneyBookArgs = {
  amount: Scalars['Float'];
  budgetId: Scalars['String'];
  createMoneyBookInput: ICreateMoneyBookInput;
};


export type IMutationCreatePointTransactionArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreateScheduleArgs = {
  createScheduleInput: ICreateScheduleInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBannerImagefileArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationDeleteBoardImagefileArgs = {
  url: Scalars['String'];
};


export type IMutationDeleteDetailScheduleArgs = {
  detailScheduleId: Scalars['String'];
};


export type IMutationDeleteProfileImagefileArgs = {
  userId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userEmail: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationPaymentPointTransactionArgs = {
  point: Scalars['Float'];
  userId: Scalars['String'];
};


export type IMutationShareArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationUnshareArgs = {
  scheduleId: Scalars['String'];
};


export type IMutationUpdateBannerImageArgs = {
  scheduleId: Scalars['String'];
  updateBannerImageInput: IUpdateBannerImageInput;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBudgetArgs = {
  scheduleId: Scalars['String'];
  totalAmount: Scalars['Float'];
};


export type IMutationUpdateDetailScheduleArgs = {
  detailScheduleId: Scalars['String'];
  updateDetailScheduleInput: IUpdateDetailScheduleInput;
};


export type IMutationUpdateMoneyBookArgs = {
  budgetId: Scalars['String'];
  moneyBookId: Scalars['String'];
  updateMoneyBookInput: IUpdateMoneyBookInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadBannerImagefileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadBoardImagefileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadProfileImagefileArgs = {
  file: Scalars['Upload'];
};

export enum INumber_People_Enum {
  Four = 'FOUR',
  Group = 'GROUP',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO'
}

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Charge = 'CHARGE',
  Earn = 'EARN',
  Payment = 'PAYMENT'
}

export type IPointHistory = {
  __typename?: 'PointHistory';
  changed: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mainCategory: IMainCategory;
  pointId: IPointTransaction;
  status: IPoint_Transaction_Status_Enum;
};

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: Array<IBoard>;
  fetchBudget: Array<IBudget>;
  fetchDetailSchedule: Array<IDetailSchedule>;
  fetchDetailSchedules: Array<IDetailSchedule>;
  fetchMainCategory: Array<IMainCategory>;
  fetchMoneyBook: Array<IMoneyBook>;
  fetchPointHistory: Array<IPointHistory>;
  fetchSchedule: ISchedule;
  fetchSchedules: Array<ISchedule>;
  fetchShareSchedules: Array<ISchedule>;
  fetchUser: IUser;
  scheduleHashTagSearch: Array<ISchedule>;
  scheduleSearch: Array<ISchedule>;
};


export type IQueryFetchBoardArgs = {
  scheduleId: Scalars['String'];
};


export type IQueryFetchBudgetArgs = {
  scheduleId: Scalars['String'];
};


export type IQueryFetchDetailScheduleArgs = {
  day: Scalars['String'];
  scheduleId: Scalars['String'];
};


export type IQueryFetchDetailSchedulesArgs = {
  scheduleId: Scalars['String'];
};


export type IQueryFetchMoneyBookArgs = {
  budgetId: Scalars['String'];
  date: Scalars['String'];
};


export type IQueryFetchScheduleArgs = {
  scheduleId: Scalars['String'];
};


export type IQueryFetchSchedulesArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchShareSchedulesArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryScheduleHashTagSearchArgs = {
  hashTag: Scalars['String'];
  where: Scalars['String'];
};


export type IQueryScheduleSearchArgs = {
  search: Scalars['String'];
  where: Scalars['String'];
};

export enum ISpending_Category_Status_Enum {
  Etc = 'ETC',
  Food = 'FOOD',
  Shopping = 'SHOPPING',
  Stay = 'STAY',
  Tourism = 'TOURISM',
  Transportation = 'TRANSPORTATION'
}

export type ISchedule = {
  __typename?: 'Schedule';
  createAt: Scalars['DateTime'];
  endDate: Scalars['String'];
  hashtag: IHashtag;
  id: Scalars['String'];
  isShare: Scalars['String'];
  location: Scalars['String'];
  mainCategory: IMainCategory;
  numberPeople?: Maybe<INumber_People_Enum>;
  startDate: Scalars['String'];
  title: Scalars['String'];
  tripdates: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  user: IUser;
};

export type IUpdateBoardInput = {
  content: Scalars['String'];
};

export type IUpdateDetailScheduleInput = {
  date: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
  place: Scalars['String'];
  useTime: Scalars['String'];
};

export type IUpdateMoneyBookInput = {
  amount: Scalars['Int'];
  context: Scalars['String'];
  date: Scalars['String'];
  memo: Scalars['String'];
  status: ISpending_Category_Status_Enum;
  time: Scalars['String'];
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  mainCategory: IMainCategory;
  nickName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  point: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};

export type IUpdateBannerImageInput = {
  url?: InputMaybe<Scalars['String']>;
};
