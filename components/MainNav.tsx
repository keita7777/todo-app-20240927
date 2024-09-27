import Link from "next/link";

const session = true;

const MainNav = () => {
  return (
    <header className="bg-blue-200 p-4 flex flex-col">
      <div className="text-2xl font-bold">
        <Link href="/">TODO APP</Link>
      </div>
      <div className="flex flex-col justify-between items-start flex-1">
        <ul className="flex flex-col gap-4 mt-4">
          {session ? (
            <>
              <li>
                <Link href="/create">新規作成</Link>
              </li>
              <li>
                <Link href="/profile">プロフィール</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/register">ユーザー登録</Link>
              </li>
              <li>
                <Link href="/login">ログイン</Link>
              </li>
            </>
          )}
        </ul>
        {session && <button>ログアウト</button>}
      </div>
    </header>
  );
};
export default MainNav;
