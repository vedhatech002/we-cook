import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addLoginUserDetails, signInModalToggle } from "@/redux/userSlice";

const SigninPage = () => {
  const isSigninModalOpen = useSelector(
    (store) => store.user.isSigninModalOpen
  );
  if (!isSigninModalOpen) return;
  const dispatch = useDispatch();
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);

        dispatch(
          addLoginUserDetails({
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            phoneNum: user.phoneNumber,
            userPhoto: user.photoURL,
          })
        );
        dispatch(signInModalToggle());
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <section className=" h-screen fixed z-50 w-screen flex font-Inter ">
      <div className="bg-white shadow-2xl px-8 py-4 w-4/12">
        <div
          className="cursor-pointer float-end mt-4"
          onClick={() => {
            dispatch(signInModalToggle());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={18}
            height={18}
          >
            <path
              fill="#232c33"
              d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
              className="color000000 svgShape"
            ></path>
          </svg>
        </div>
        <div className="flex justify-between items-center mt-20">
          <div className="flex justify-between w-full">
            <div className="space-y-2">
              <h1 className="font-poppins text-xl font-semibold">Sign In</h1>
              <p className="text-sm font-medium font-Inter text-gray-500 pb-2">
                for enjoying food
              </p>
              <hr className="bg-slate-950 h-[2px]  w-12 rounded-full "></hr>
            </div>
            <div>
              <img
                className="w-24"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              />
            </div>
          </div>
        </div>
        <button
          onClick={signIn}
          className="bg-orange-500 text-white px-4 py-2 rounded-md mt-12 font-poppins w-full font-semibold flex items-center justify-center gap-3 hover:shadow-md "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-380.2 274.7 65.7 65.8"
              width={28}
              height={28}
            >
              <circle cx="-347.3" cy="307.6" r="32.9" fill="#e0e0e0"></circle>
              <circle cx="-347.3" cy="307.1" r="32.4" fill="#fff"></circle>
              <defs>
                <path
                  id="a"
                  d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                ></path>
              </defs>
              <clipPath id="b">
                <use overflow="visible" xlinkHref="#a"></use>
              </clipPath>
              <path
                fill="#fbbc05"
                d="M-370.8 320.3v-26l17 13z"
                clipPath="url(#b)"
              ></path>
              <defs>
                <path
                  id="c"
                  d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                ></path>
              </defs>
              <clipPath id="d">
                <use overflow="visible" xlinkHref="#c"></use>
              </clipPath>
              <path
                fill="#ea4335"
                d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z"
                clipPath="url(#d)"
              ></path>
              <defs>
                <path
                  id="e"
                  d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                ></path>
              </defs>
              <clipPath id="f">
                <use overflow="visible" xlinkHref="#e"></use>
              </clipPath>
              <path
                fill="#34a853"
                d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z"
                clipPath="url(#f)"
              ></path>
              <g>
                <defs>
                  <path
                    id="g"
                    d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  ></path>
                </defs>
                <clipPath id="h">
                  <use overflow="visible" xlinkHref="#g"></use>
                </clipPath>
                <path
                  fill="#4285f4"
                  d="M-322.8 331.3l-31-24-4-3 35-10z"
                  clipPath="url(#h)"
                ></path>
              </g>
            </svg>
          </span>
          Sign in with google
        </button>
        <p className="text-xs font-Inter font-medium py-2 text-gray-500">
          By clicking , I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
      <div
        className="bg-[#1a1a1be6] h-full w-8/12"
        onClick={() => {
          dispatch(signInModalToggle());
        }}
      ></div>
    </section>
  );
};

export default SigninPage;
