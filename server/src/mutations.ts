import { getItem } from 'simple-dynamodb';

export const updateItem = async ({ userId }: { userId: string }): Promise<User> => {
  // USE AN ORM INSTEAD OF simple-dynamodb !!!!!!!

  let user = await getItem({
    TableName: process.env.USER_TABLE!,
    Key: {
      userId
    }
  })

  return {
    ...user.Item
  };
};