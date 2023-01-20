function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-4xl'>Film ve Gezi</h1>
        <h2 className='mt-5 md:mt-0'>
          Izledigimiz filmleri{" "}
          <span className='underline decoration-4 decoration-[#0af70a]'>
            ve gezdigimiz yerleri{" "}
          </span>
          blogumuzda bulabilirsiniz
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Kesfettigimiz sehirler | Izledigimiz filmler | Hepsi burada sizlerle !
      </p>
    </div>
  );
}

export default Banner;
