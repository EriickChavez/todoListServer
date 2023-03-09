export interface ToDos {
  todos?: Array<ToDosObject>;
}

export interface UserToDos {
  todos?: ToDosObject;
}

export interface ToDosObject {
  userId?: string;
  id?: string;
  title?: string;
  completed?: boolean;
  createdAt?: string;
}
