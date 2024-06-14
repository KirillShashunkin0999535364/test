import { CustomFile } from 'src/components/upload';

// ----------------------------------------------------------------------



export type IUserProfile = {
  roles: { id: number; name: string }[];
  email: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phoneNumber: string | null;
  photoURL?: string;
};

export type IUserItem = {
  id: string;
  name: string;
  city: string;
  role: string;
  email: string;
  state: string;
  status: string;
  address: string;
  country: string;
  zipCode: string;
  company: string;
  avatarUrl: string;
  phoneNumber: string;
  isVerified: boolean;
};
