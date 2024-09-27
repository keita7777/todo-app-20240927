const Register = () => {
  return (
    <div className="flex-1 flex flex-col p-4 items-center">
      <h1 className="text-2xl font-bold text-center mb-6">新規ユーザー登録</h1>
      <form className="w-full max-w-sm">
        <div className="flex flex-col mb-2">
          <label htmlFor="">メールアドレス</label>
          <input type="text" className="border rounded-md" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">ユーザー名</label>
          <input type="text" className="border rounded-md" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">パスワード</label>
          <input type="text" className="border rounded-md" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">パスワード確認</label>
          <input type="text" className="border rounded-md" />
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md min-w-20">
            登録
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
