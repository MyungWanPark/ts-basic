{
  type Type<T> = T extends string //
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : T extends undefined
    ? undefined
    : T extends null
    ? null
    : T extends Function
    ? Function
    : object;

  const a: Type<() => number> = () => console.log(3);
  a();

  type Todo = {
    dueDate: string;
    job: string[];
    priority: 'high' | 'middle' | 'low';
  };

  function changeTodo(todo: Todo, changingPart: Partial<Todo>): Todo {
    return {
      ...todo,
      ...changingPart,
    };
  }
  const todayWork: Todo = {
    dueDate: 'today',
    job: ['coding', 'reporting', 'meeting'],
    priority: 'high',
  };

  console.log(
    changeTodo(todayWork, {
      dueDate: 'tomorrow',
    })
  );
}
