const TodoForm = () => {
  return (
    <form action="">
      <div className="flex flex-col mb-2">
        <label htmlFor="">タイトル</label>
        <input type="text" className="border rounded-md" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="">詳細</label>
        <textarea className="border rounded-md" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="">ステータス</label>
        <select className="min-w-20 border rounded-md p-2">
          <option value="">未着手</option>
          <option value="">進行中</option>
          <option value="">完了</option>
        </select>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md min-w-20">
          作成
        </button>
        <button className="bg-gray-500 text-white px-2 py-1 rounded-md min-w-20">
          リセット
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
