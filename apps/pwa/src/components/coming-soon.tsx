export default function ComingSoon() {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
      style={{
        backgroundImage:
          "url(https://i.imgur.com/3vMyPVu.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
        <h1 className="text-5xl">
          <b>Paroki Kristus Raja Barong Tongkok</b>
        </h1>
        <p>Website masih dalam tahap pengembangan</p>

        <div className="mt-10 mb-5">
          <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
            <div
              className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
