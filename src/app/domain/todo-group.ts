export interface TodoGroup {
  title: string;
  items: TodoItem[];
}

export interface TodoItem {
  title: string;
  status: TodoStatus;
  description: string;
}

export enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
}
