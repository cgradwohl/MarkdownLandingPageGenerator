type User = {
  userId: string;
  createdAt: Date | string;
  lastSignedInAt: Date | string;
};

type UserParams = {
  userId: string;
};