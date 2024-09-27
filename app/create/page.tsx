import TodoForm from "@/components/TodoForm";

const Create = () => {
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        新しいTODOを作成する
      </h1>
      <TodoForm />
    </div>
  );
};
export default Create;
