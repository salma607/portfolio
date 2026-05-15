export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        K
      </div>
      <div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Keinstein
        </h1>
        <p className="text-xs text-gray-600 font-medium">Kids Academy</p>
      </div>
    </div>
  );
}
