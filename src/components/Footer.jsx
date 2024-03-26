const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-32 py-6 flex justify-between items-center font-poppins">
      <div className="logo flex items-center gap-2 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            data-name="Layer 1"
            viewBox="0 0 64 64"
          >
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              d="M16 39.33h6v17.39a3 3 0 01-3 3h0a3 3 0 01-3-3V39.33h0z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              d="M22 39.33h-9.55a2 2 0 01-2-2V24.82c0-14.92 6.14-18.75 10.22-20.38a1 1 0 011.33.94z"
            ></path>
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              d="M47.55 39.33h6v17.39a3 3 0 01-3 3h0a3 3 0 01-3-3V39.33h0z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              d="M38.53 4.28h7a8 8 0 018 8v27h0-15a2 2 0 01-2-2v-31a2 2 0 012-2z"
            ></path>
            <circle cx="42.65" cy="10.51" r="2.01" fill="#5f363a"></circle>
          </svg>
        </span>
        <h4 className="text-xl font-extrabold">WeCook</h4>
      </div>
      <p className="text-sm ">
        <span> made with ❤️ by </span>
        <a
          className="hover:text-orange-500"
          href="https://github.com/vedhatech002"
          target="_blank"
        >
          vedhatech
        </a>
      </p>
    </footer>
  );
};

export default Footer;
