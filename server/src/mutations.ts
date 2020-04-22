import { getItem } from 'simple-dynamodb';

export const updateUser = async (
  _: any,
  {
    userId
  }: { 
    userId: string 
  }
): Promise<User> => {
  // USE AN ORM INSTEAD OF simple-dynamodb !!!!!!!

  let user = await getItem({
    TableName: process.env.USER_TABLE!,
    Key: {
      userId
    }
  })

  return {
    userId,
    createdAt: user.Item ? user.Item.createdAt : null,
    lastSignedInAt: user.Item ? user.Item.lastSignedInAt : null
  };
};
