import faker from "faker";
import { ArrayUtil } from "../app/util";

export const createForumItem = () => {
  return {
    _id: faker.datatype.uuid(),
    sessionId: faker.datatype.uuid(),
    title: faker.lorem.sentence(12),
    content: faker.lorem.sentences(3),
  };
};

export const forums = ArrayUtil.generateArrays(5, createForumItem);
