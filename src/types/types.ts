interface MonthlyStats {
  month: string;
  newUsers: number;
  totalUsers: number;
  newSubscriptions: number;
  totalSubscriptions: number;
  monthlyEarning: number;
}

export interface IAnalatycs {
  year: number;
  totalUsers: number;
  totalBookings: number;
  totalEarning: number;
  totalSubscriptions: number;
  monthlyData: MonthlyStats[];
}


export interface IUser {
  _id: string;
  name: string;
  profilePic: string | null;
  isVerifiedHost: boolean;
  email: string;
  contact: string;
  address: string;
  connectedAccountId: string | null;
  stripeConnectedLink: string | null;
  dateOfBirth: string; // ISO string (e.g., "2003-09-11T18:00:00.000Z")
  images: string[];
  status: "active" | "inactive" | string;
  role: "guest" | "host" | "admin" | string;
  verified: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  airlineVerification: string | null;
}
