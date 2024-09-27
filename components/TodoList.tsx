import Link from "next/link";

const TodoList = () => {
  return (
    <div>
      <ul>
        <li className="border rounded-md p-2 bg-blue-50 mb-2">
          <Link href="/">
            <div className="flex items-center">
              <select className="min-w-20 border rounded-md p-2">
                <option value="">未着手</option>
                <option value="">進行中</option>
                <option value="">完了</option>
              </select>
              <div className="flex-1 mx-4">
                <p className="text-xl font-bold mb-2">タイトル</p>
                <p>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                  編集
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  削除
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-4 text-gray-500 text-sm">
              <p>作成者：ユーザー</p>
              <p>最終更新日：2024年12月12日</p>
            </div>
          </Link>
        </li>
        <li className="border rounded-md p-2 bg-blue-50 mb-2">
          <Link href="/">
            <div className="flex items-center">
              <select className="min-w-20 border rounded-md p-2">
                <option value="">未着手</option>
                <option value="">進行中</option>
                <option value="">完了</option>
              </select>
              <div className="flex-1 mx-4">
                <p className="text-xl font-bold mb-2">タイトル</p>
                <p>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                  編集
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  削除
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-4 text-gray-500 text-sm">
              <p>作成者：ユーザー</p>
              <p>最終更新日：2024年12月12日</p>
            </div>
          </Link>
        </li>
        <li className="border rounded-md p-2 bg-blue-50 mb-2">
          <Link href="/">
            <div className="flex items-center">
              <select className="min-w-20 border rounded-md p-2">
                <option value="">未着手</option>
                <option value="">進行中</option>
                <option value="">完了</option>
              </select>
              <div className="flex-1 mx-4">
                <p className="text-xl font-bold mb-2">タイトル</p>
                <p>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                  編集
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  削除
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-4 text-gray-500 text-sm">
              <p>作成者：ユーザー</p>
              <p>最終更新日：2024年12月12日</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default TodoList;
